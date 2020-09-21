import { Subject } from "rxjs";

export abstract class Board {

    constructor(canvas : HTMLCanvasElement, numSpotsInRow: number, numSpotsInCol: number) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.numberOfSpotsInRow = numSpotsInRow;
        this.numberOfSpotsInCol = numSpotsInCol
        this.boardArray = new Array(numSpotsInRow*this.numberOfSpotsInCol);
        this.setCanvasDimensions(this.canvas.width,this.canvas.height);
        this.drawBoardAndPieces();
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

    }

    checkValidSpot( r:number, c:number) : BoardPiece {
        let pieceIdx = c + r*this.numberOfSpotsInRow;
        return {
            isValid: !!this.boardArray[pieceIdx],
            index: pieceIdx
        };
    }

    clickBoard(x:number, y:number) : BoardPiece{

        
        let i = 0;
        let j = 0;
        let widthOfOneSpot = this.canvas.width/this.numberOfSpotsInRow;
        let heightOfOneSpot = this.canvas.height/this.numberOfSpotsInCol;
        

        //check boundaries of board and see if the x-y of the click falls into a piece
        while (i < this.numberOfSpotsInRow && j < this.numberOfSpotsInCol) {
            let checkRow =  x > widthOfOneSpot*i && x < widthOfOneSpot*(i+1);
            let checkCol = y > heightOfOneSpot*j && y < heightOfOneSpot*(j+1);

            if (!checkRow) {
                i++
            }
            
            if (!checkCol) {
                j++;
            }

            if (checkRow && checkCol) {
                break;
            }
        }

        return this.checkValidSpot(i,j);
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