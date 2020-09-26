import { ThrowStmt } from '@angular/compiler';
import { Subject } from "rxjs";

export abstract class Board {

    constructor(canvas : HTMLCanvasElement, numberOfRows: number, numberOfCols: number) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.lengthOfCol = numberOfRows;
        this.lengthOfRow = numberOfCols;

        this.emptyBoard();
        this.setCanvasDimensions(this.canvas.width,this.canvas.height);
    }

    public boardArray : Array<BoardPiece[]> //stroes the pieces

    public canvas : HTMLCanvasElement;
    public context : CanvasRenderingContext2D;
    public canvasSubject = new Subject<HTMLCanvasElement>();
    public lengthOfCol : number; //number of spots in a row or column
    public lengthOfRow : number;
    public emptySpots : number;

    abstract checkForWinner();
    abstract clickBoard(x:number,y:number):BoardPiece;
    abstract getBoardPiece(r:number,c:number):BoardPiece;
    abstract drawBoard();
    abstract drawPieces();

    clearBoard() {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.canvasSubject.next(this.canvas);
    }

    placePiece(index: number[], playerPiece:string, isFinal : boolean) {
        let boardPiece = this.boardArray[index[0]][index[1]];
        boardPiece.piece = playerPiece;
        
        if (isFinal) {
            this.emptySpots -= 1;
            boardPiece.set = true;            
        }

        this.boardArray[index[0]][index[1]] = boardPiece;

    }

    removePiece(index: number[]) {
        this.emptySpots += 1;
        this.boardArray[index[0]][index[1]] = {set : false, piece : "", index : index}
    }
    
    drawBoardAndPieces() {
        this.clearBoard();
        this.drawBoard();
        this.drawPieces();
        this.canvasSubject.next(this.canvas);
    }


    emptyBoard() {

        this.emptySpots = this.lengthOfRow*this.lengthOfCol;
        this.boardArray = new Array(this.lengthOfCol);

        for (let i = 0; i < this.lengthOfCol; i++){
            this.boardArray[i] = new Array<BoardPiece>(this.lengthOfRow)
            for (let j = 0; j < this.lengthOfRow; j++) {
                this.boardArray[i][j] = {piece: "", index: [i,j], set: false}
            }
        }
    }

    resetBoard() {
        this.emptyBoard();
        this.drawBoard();
    }
    
    setCanvasDimensions(width=this.canvas.width, height=this.canvas.height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}

