import { TicTacToeBoard } from "../board/ttt-board";
import { GameManagerService } from "../game-manager.service";
import { Subscription } from "rxjs";

export abstract class Player {

    boardArray = [];
    playerTurnSubscription : Subscription
    gameEndSubscription : Subscription
    rows : number;
    columns : number;
    pieceOne : string;
    pieceTwo: string;

    constructor(protected piece : string, protected isHuman : boolean, protected mode : string = "easy", protected gameManager : GameManagerService=null) {
        this.mode = mode;

        const gInfo = this.gameManager.getGameInfo()

        if (gInfo.gameType === "TTT") {
            this.rows = 3
            this.columns = 3
            this.pieceOne = "x"
            this.pieceTwo = "o"
        } else if (gInfo.gameType === "CF") {
            this.rows = 6
            this.columns = 7
            this.pieceOne = "r"
            this.pieceTwo = "y"
        }
    }
    
    getIsHuman() {
        return this.isHuman;
    }

    getPiece() {
        return this.piece;
    }

    setPiece(piece: string) {
        this.piece = piece;
    }

    abstract playEasy();
    abstract playMedOrHard(num : number);


}