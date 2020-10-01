import { Board } from "./abstract.board";

export class ConnectFourBoard extends Board{

    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 7, 6);
    }

    checkForWinner() : string{
        return ""
    }
    
    getBoardPiece(r:number,c:number){
        return {index: [], set: false, piece: ""}
    }

    drawBoard() {
        
    }

    drawPieces() {

    }
    
    clickBoard(x:number,y:number) {
        return {index: [], set: false, piece: ""}
    }

    rowColToString(rc : BoardPiece[]) {
        return ""
    }
}