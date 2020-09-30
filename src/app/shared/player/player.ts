import { Player } from "./abstract.player";
import { GameManagerService } from "../game-manager.service";

export class ComputerPlayer extends Player {

    constructor(piece : string, isHuman=false, mode : string = "easy", gm: GameManagerService =null){
        super(piece,isHuman,mode,gm)
        
        this.playerTurnSubscription = this.gameManager.playerTurnSubject.subscribe(turn => {
            if (turn === this.piece) {
                let result = this.thinkAboutMove();
                this.decideOnMove(result)
            }
        })
    }


    thinkAboutMove() : number[] {
        let result = this.play();
        let boardPiece = this.gameManager.board.getBoardPiece(result[0],result[1]);
        while (boardPiece.piece != "" && this.gameManager.board.emptySpots > 0) {
            result = this.play();
            boardPiece = this.gameManager.board.getBoardPiece(result[0],result[1]);
        }
        return result;
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
        const r = Math.floor(Math.random()*3);
        const c = Math.floor(Math.random()*3);
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
        
    }
}