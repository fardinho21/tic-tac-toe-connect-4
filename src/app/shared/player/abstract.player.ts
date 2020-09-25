import { TicTacToeBoard } from "../board/ttt-board";
import { GameManagerService } from "../game-manager.service";
import { Subscription } from "rxjs";

export abstract class Player {

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