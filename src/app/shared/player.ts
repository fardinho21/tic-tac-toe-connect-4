import { TicTacToeBoard } from "./boards";
import { GameManagerService } from "./game-manager.service";
import { Subscription } from "rxjs";

abstract class Player {

    boardArray = [];
    playerTurnSubscription : Subscription

    constructor(protected piece : string, protected isHuman : boolean, protected mode : string = "easy", protected gameManager : GameManagerService=null) {
        this.mode = mode;
    }
    
    getIsHuman() {
        return this.isHuman;
    }

    getPiece() {
        return this.piece;
    }

    abstract playEasy();
    abstract playMedium();
    abstract playHard();


}

export class ComputerPlayer extends Player {

    constructor(piece : string, isHuman=false, mode : string = "easy", gm: GameManagerService =null){
        super(piece,isHuman,mode)
        this.playerTurnSubscription = gm.playerTurnSubject.subscribe(turn => {
            if (turn == this.piece) {
                this.play();
            }
        })
    }

    play () {

        if (this.mode === "easy") {
            this.playEasy()
        } else if (this.mode === "medium") {
            this.playMedium()
        } else {
            this.playHard()
        }

    }
 
    playEasy () {
        const r = Math.floor(Math.random()*8);
        const c = Math.floor(Math.random()*8);
        return [r,c]
    }

    playMedium() {
        const decision = Math.floor(Math.random()*100)

        if (decision >= 60) {
            this.playEasy();
        } else {
            this.playMiniMax();
        }
    }
    
    playHard() {
        const decision = Math.floor(Math.random()*100)

        if (decision >= 80) {
            this.playEasy();
        } else {
            this.playMiniMax();
        }
    }


    private playMiniMax() {

    }
}