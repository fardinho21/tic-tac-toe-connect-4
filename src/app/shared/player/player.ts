import { Player } from "./abstract.player";
import { GameManagerService } from "../game-manager.service";
import { TicTacToeBoard } from '../board/ttt-board';

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
            return this.playMedOrHard(60)
        } else {
            return this.playMedOrHard(80)
        }

    }
    
    getPieceFromBoardType(gInfo: GameInfo, r :number, c: number) {
        
        if (gInfo.gameType === "TTT") {
            return this.gameManager.board.getBoardPiece(r,c)
        } else if (gInfo.gameType === "CF") {
            const dpidx = this.gameManager.board.getDropPieceIndex([r,c]);
            return this.gameManager.board.getBoardPiece(dpidx[0],dpidx[1])
        }
    }
 
    playEasy () {
        const gInfo = this.gameManager.getGameInfo();
        let r = Math.floor(Math.random()*this.rows);
        let c = Math.floor(Math.random()*this.columns);
        let piece = this.getPieceFromBoardType(gInfo, r,c);

        
        while (piece.piece != "") {
            r = Math.floor(Math.random()*this.rows);
            c = Math.floor(Math.random()*this.columns);
            piece = this.getPieceFromBoardType(gInfo,r,c);
        }
        return piece.index;
    }


   
    playMedOrHard(num : number) {
        const decision = Math.floor(Math.random()*100)

        if (decision >= num) {
            return this.playEasy();
        } else {
            const gInfo = this.gameManager.getGameInfo();
            if (gInfo.gameType === "TTT") {
                return this.playMiniMax();
            } else if (gInfo.gameType === "CF") {

            }
        }
    }

    private playMiniMax() {
        return this.findBestMove();
    }

    private findBestMove() {

        let board = this.gameManager.board;
        let bestVal: number = this.piece === this.pieceOne? -1000 : 1000;
        let bestMove : number[] = [-1,-1];

        for (let r = 0 ; r < this.rows; r++) {
            for (let c = 0; c < this.columns; c++) {
                if (board.getBoardPiece(r,c).piece === "") {
                    board.placePiece([r,c], this.piece, false)
                    let isMaximizer = this.piece === this.pieceOne ? true : false;
                    let moveVal = this.miniMax(board,0,!isMaximizer,[r,c]);
                    board.removePiece([r,c]);
                    let check = this.piece === this.pieceOne ? moveVal > bestVal : moveVal < bestVal;
                    if (check) {
                        bestMove = [r,c]
                        bestVal = moveVal
                    }
                }
            }
        }
        return bestMove;
    }

    private miniMax(board: TicTacToeBoard, depth: number, isMax: boolean, move? : number[]) : number {
        
        const winner = board.checkForWinner(move);
        
        if (winner === this.pieceOne) {
            return 10 - depth;
        } else if (winner === this.pieceTwo) {
            return -10 + depth;
        } 


        const movesLeft = board.emptySpots;

        if (movesLeft <= 0) {
            return 0;
        }

        if (isMax) {
            let bestVal = -10000
    
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.columns; c++) {
                    if (board.getBoardPiece(r,c).piece === "") {
                        board.placePiece([r,c], this.pieceOne, false)
                        let value = this.miniMax(board, depth+1, !isMax, [r,c])
                        value = !!value ? value : 0;
                        bestVal = Math.max(bestVal, value)
                        board.removePiece([r,c])
                    }

                }
            }
            return bestVal

        } else {
            let bestVal = 10000

            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.columns; c++) {
                    if (board.getBoardPiece(r,c).piece === "") {
                        board.placePiece([r,c], this.pieceTwo, false)
                        let value = this.miniMax(board, depth+1, !isMax, [r,c])
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