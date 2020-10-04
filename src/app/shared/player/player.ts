import { Player } from "./abstract.player";
import { GameManagerService } from "../game-manager.service";
import { TicTacToeBoard } from '../board/ttt-board';
import { verifyHostBindings } from '@angular/compiler';

export class ComputerPlayer extends Player {

    gameEnd : boolean = false;

    constructor(piece : string, isHuman=false, mode : string = "easy", gm: GameManagerService =null){
        super(piece,isHuman,mode,gm)
        
        this.playerTurnSubscription = this.gameManager.playerTurnSubject.subscribe(turn => {
            if (turn === this.piece && this.gameManager && !this.gameEnd) {
                let result = this.play()
                this.decideOnMove(result)
            }
        })

        this.gameEndSubscription = this.gameManager.gameEndSubject.subscribe(result => {
            if (result != "") {
                this.gameEnd = true;
            }
        })
    }

    quitGame() {
        this.gameEndSubscription.unsubscribe();
        this.playerTurnSubscription.unsubscribe();
    }

    decideOnMove(choice: number[]) {
        this.gameManager.confirmMove(choice,this.piece)
    }

    play () : number[] {
        
        if (this.mode === "easy") {
            return this.playEasy()
        } else if (this.mode === "medium") {
            return this.playMedium()
        } else {
            return this.playHard()
        }
    
        

    }
 
    playEasy () {
        let r = Math.floor(Math.random()*3);
        let c = Math.floor(Math.random()*3);
        let piece = this.gameManager.board.getBoardPiece(r,c)
        while (piece.piece != "") {
            r = Math.floor(Math.random()*3);
            c = Math.floor(Math.random()*3);
            piece = this.gameManager.board.getBoardPiece(r,c);
        }
        return [r,c]
    }

    playMedium() {
        const decision = Math.floor(Math.random()*100)

        if (decision >= 60) {
            return this.playEasy();
        } else {
           return this.playMiniMax();
        }
    }
    
    playHard() {
        const decision = Math.floor(Math.random()*100)

        if (decision >= 80) {
            return this.playEasy();
        } else {
            return this.playMiniMax();
        }
    }

    private playMiniMax() {
        return this.findBestMove();
    }

    private findBestMove() {
        let board = this.gameManager.board;
        let bestVal: number = this.piece === "x" ? -1000 : 1000;
        let bestMove : number[] = [-1,-1];

        for (let r = 0 ; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (board.getBoardPiece(r,c).piece === "") {
                    board.placePiece([r,c], this.piece, false)
                    let isMaximizer = this.piece === "x" ? true : false;
                    let moveVal = this.miniMax(board,0,!isMaximizer);
                    board.removePiece([r,c]);
                    let check = this.piece === "x" ? moveVal > bestVal : moveVal < bestVal;
                    if (check) {
                        bestMove = [r,c]
                        bestVal = moveVal
                    }
                }
            }
        }
        return bestMove;
    }

    private miniMax(board: TicTacToeBoard, depth: number, isMax: boolean) : number {
        const winner = board.checkForWinner();
        
        if (winner === "x") {
            return 10 - depth;
        } else if (winner === "o") {
            return -10 + depth;
        } 

        const movesLeft = board.emptySpots;

        if (movesLeft <= 0) {
            return 0;
        }

        if (isMax) {
            let bestVal = -10000
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    if (board.getBoardPiece(r,c).piece === "") {
                        board.placePiece([r,c], "x", false)
                        let value = this.miniMax(board, depth+1, !isMax)
                        value = !!value ? value : 0;
                        bestVal = Math.max(bestVal, value)
                        board.removePiece([r,c])
                    }

                }
            }
            return bestVal

        } else {
            let bestVal = 10000
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    if (board.getBoardPiece(r,c).piece === "") {
                        board.placePiece([r,c], "o", false)
                        let value = this.miniMax(board, depth+1, !isMax)
                        value = !!value ? value : 0;
                        bestVal = Math.min(bestVal, value)
                        board.removePiece([r,c])
                    }

                }
            }
            return bestVal;
        }
    }
}