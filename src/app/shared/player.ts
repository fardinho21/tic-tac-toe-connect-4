import { TicTacToeBoard } from "./boards";

abstract class Player {

    boardArray = [];

    constructor(private piece : string, private isHuman : boolean) {

    }
    
    getIsHuman() {
        return this.isHuman;
    }

    getPiece() {
        return this.piece;
    }


}

export class ComputerPlayer extends Player {
    constructor(piece : string, isHuman=false){
        super(piece,isHuman)
    }

    determineMove(board : TicTacToeBoard) {



    }
}