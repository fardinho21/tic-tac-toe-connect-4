import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Subject } from "rxjs";

export abstract class Board {

    constructor(canvas : HTMLCanvasElement, numSpotsInRow: number, numSpotsInCol: number) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.numberOfSpotsInRow = numSpotsInRow;
        this.numberOfSpotsInCol = numSpotsInCol
        this.boardArray = new Array(numSpotsInRow*this.numberOfSpotsInCol);
        this.setCanvasDimensions(this.canvas.width,this.canvas.height);
    }

    public boardArray = [] //stroes the pieces

    public canvas : HTMLCanvasElement;
    public context : CanvasRenderingContext2D;
    public canvasSubject = new Subject<HTMLCanvasElement>();
    public numberOfSpotsInRow : number; //number of spots in a row or column
    public numberOfSpotsInCol : number;

    abstract async checkForWinner();
    abstract clickBoard(x:number,y:number):BoardPiece;
    abstract checkValidSpot(r:number,c:number):BoardPiece;
    abstract drawBoard();
    abstract drawPieces();

    placePiece(boardPiece: BoardPiece, playerPiece:string) {
        this.boardArray[boardPiece.index]=playerPiece;
    }
    
    drawBoardAndPieces() {
        this.drawBoard();
        this.drawPieces();
        this.canvasSubject.next(this.canvas);
    }

    checkForWinnerPromise() {
        return new Promise((resolve, reject) => {
            const result = this.checkForWinner();
            if (result) {
                resolve(result)
            } else {
                reject(result)
            }
        })
    }

    resetBoard() {
        this.boardArray=[];
    }
    
    setCanvasDimensions(width=this.canvas.width, height=this.canvas.height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}

export class TicTacToeBoard extends Board{
    
    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 3, 3);
        this.boardArray[0]="x";
        this.drawBoardAndPieces();
        console.log(this.boardArray);
    }

    checkForWinner() {

        //check diagonals
        let checkDiag1 = (this.boardArray[0] === this.boardArray[4]) && (this.boardArray[0] === this.boardArray[7])
        let checkDiag2 = (this.boardArray[2] === this.boardArray[4]) && (this.boardArray[2] === this.boardArray[6])

        if (checkDiag1 || checkDiag2) {
            return checkDiag1 ? { win: this.boardArray[0], coord: [0, 4, 7] } : { win: this.boardArray[2], coord: [2, 4, 6] };
        }

        let i = 0;
        //check rows and cols
        while (i <= 2) {
            let checkRow = (this.boardArray[(i + 2 * i)] === this.boardArray[(i + 2 * i) + 1]) && (this.boardArray[(i + 2 * i)] === this.boardArray[(i + 2 * i) + 2]);

            if (checkRow) {
                return { win: this.boardArray[i + 2 * i], coord: [i + 2 * i, i + 2 * i + 1, i + 2 * i + 2] }
            }

            let checkCol = (this.boardArray[i] === this.boardArray[i + 3]) && (this.boardArray[i] === this.boardArray[i + 6]);
            if (checkCol) {
                return { win: this.boardArray[i], coord: [i, i + 3, i + 6] }
            }
            i++;
        }

        return false;
    }

    drawBoard() {

        console.log(this.canvas.width, this.canvas.height)
        //draw columns
        let i = this.canvas.width/this.numberOfSpotsInCol
        while (i < this.canvas.width) {
            this.context.beginPath() 
            this.context.moveTo(i,0);
            this.context.lineTo(i,this.canvas.height);
            i+=this.canvas.width/this.numberOfSpotsInCol;
            this.context.stroke()
        }

        i = this.canvas.height/this.numberOfSpotsInRow

        //draw rows
        while (i < this.canvas.height) {
            this.context.beginPath() 
            this.context.moveTo(0,i);
            this.context.lineTo(this.canvas.width,i);
            i+=this.canvas.height/this.numberOfSpotsInRow;
            this.context.stroke()
        }       


    }

    drawPieces() {

        let i = 0;
        let j = 0;
        let widthOfOneSpot = this.canvas.width/this.numberOfSpotsInRow;
        let heightOfOneSpot = this.canvas.height/this.numberOfSpotsInCol;
        let arrayIndex = this.getArrayIndexFromRowAndCol(i,j);
        
        while (arrayIndex < this.boardArray.length ) {
            
            let piece = this.boardArray[arrayIndex];
            this.context.beginPath()
            if (piece === "x") {

                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.25),heightOfOneSpot*(i+0.25));
                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.75),heightOfOneSpot*(i+0.25));
                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.25),heightOfOneSpot*(i+0.75));
                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.75),heightOfOneSpot*(i+0.75));

            } else if (piece === "o") {
                this.context.arc(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5),widthOfOneSpot*0.25,0,2*Math.PI);
            }
            this.context.stroke();
            j++;

            if (j > this.numberOfSpotsInRow) {
                j = 0;
                i++;
            }
    

            if (i > this.numberOfSpotsInCol) {
                break;
            }
            arrayIndex = this.getArrayIndexFromRowAndCol(i,j);
        }




    }

    checkValidSpot( r:number, c:number) : BoardPiece {
        console.log(r,c)
        let pieceIdx = this.getArrayIndexFromRowAndCol(r,c);
        return {
            isValid: !this.boardArray[pieceIdx],
            index: pieceIdx
        };
    }

    getArrayIndexFromRowAndCol(r:number, c:number) : number {
        return c + r*this.numberOfSpotsInRow;
    }

    clickBoard(x:number, y:number) : BoardPiece{

        
        let i = 0;
        let j = 0;
        let widthOfOneSpot = this.canvas.width/this.numberOfSpotsInRow;
        let heightOfOneSpot = this.canvas.height/this.numberOfSpotsInCol;
        

        //check if click is in cell boundaries
        while (i < this.numberOfSpotsInRow && j < this.numberOfSpotsInCol) {
            let checkCol = x > widthOfOneSpot*j && x < widthOfOneSpot*(j+1);
            let checkRow = y > heightOfOneSpot*i && y < heightOfOneSpot*(i+1);

            if (checkRow && checkCol) {
                break;
            }

            j++;

            if (j === this.numberOfSpotsInRow) {
                j = 0;
                i++;
            }

            if (i == this.numberOfSpotsInCol) {
                break;
            }


        }
        let valid = this.checkValidSpot(i,j);
        return valid;
    }


}

export class ConnectFourBoard extends Board{

    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 7, 6);
    }

    checkForWinner() {

    }
    
    checkValidSpot(r:number,c:number){
        return {isValid:false,index:0}
    }

    drawBoard() {
        
    }

    drawPieces() {

    }
    
    clickBoard(x:number,y:number) {
        return {isValid:false,index:0}
    }
}