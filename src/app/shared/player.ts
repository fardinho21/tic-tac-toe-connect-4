import { TicTacToeBoard } from "./boards";

abstract class Player {

    boardArray = [];

    constructor(protected piece : string, protected isHuman : boolean, protected mode : string = "easy") {
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

    constructor(piece : string, isHuman=false, mode : string = "easy"){
        super(piece,isHuman,mode)
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