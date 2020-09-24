import { Subject } from "rxjs";

export abstract class Board {

    constructor(canvas : HTMLCanvasElement, numberOfRows: number, numberOfCols: number) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.lengthOfCol = numberOfRows;
        this.lengthOfRow = numberOfCols;
        this.boardArray = new Array(numberOfRows);
        for (let i = 0; i < numberOfRows; i++){
            this.boardArray[i] = new Array<string>(this.lengthOfRow)
            this.boardArray[i].fill("")
        }
        this.setCanvasDimensions(this.canvas.width,this.canvas.height);
    }

    public boardArray : Array<string[]> //stroes the pieces

    public canvas : HTMLCanvasElement;
    public context : CanvasRenderingContext2D;
    public canvasSubject = new Subject<HTMLCanvasElement>();
    public lengthOfCol : number; //number of spots in a row or column
    public lengthOfRow : number;

    abstract async checkForWinner();
    abstract clickBoard(x:number,y:number):BoardPiece;
    abstract checkValidSpot(r:number,c:number):BoardPiece;
    abstract drawBoard();
    abstract drawPieces();

    placePiece(boardPiece: BoardPiece, playerPiece:string) {
        this.boardArray[boardPiece.index[0]][boardPiece.index[1]] =playerPiece;
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
        this.drawBoard();
    }
    
    setCanvasDimensions(width=this.canvas.width, height=this.canvas.height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}

export class TicTacToeBoard extends Board{
    
    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 3, 3);
        this.boardArray[0][0]="x";
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
        let i = this.canvas.width/this.lengthOfRow
        while (i < this.canvas.width) {
            this.context.beginPath() 
            this.context.moveTo(i,0);
            this.context.lineTo(i,this.canvas.height);
            i+=this.canvas.width/this.lengthOfRow;
            this.context.stroke()
        }

        i = this.canvas.height/this.lengthOfCol

        //draw rows
        while (i < this.canvas.height) {
            this.context.beginPath() 
            this.context.moveTo(0,i);
            this.context.lineTo(this.canvas.width,i);
            i+=this.canvas.height/this.lengthOfCol;
            this.context.stroke()
        }       


    }

    drawPieces() {

        let i = 0;
        let j = 0;
        let widthOfOneSpot = this.canvas.width/this.lengthOfCol;
        let heightOfOneSpot = this.canvas.height/this.lengthOfRow;
        this.context.lineWidth = 5;
        while (true ) {
            
            let piece = this.boardArray[i][j];
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
                this.context.ellipse(
                    widthOfOneSpot*(j+0.5),
                    heightOfOneSpot*(i+0.5),
                    widthOfOneSpot*0.25,
                    heightOfOneSpot*0.25,0,0,Math.PI*2);
            }
            this.context.stroke();
            j++;

            if (j > this.lengthOfCol) {
                j = 0;
                i++;
            }
    

            if (i > this.lengthOfRow - 1) {
                break;
            }
            
        }
        this.context.lineWidth = 1;

        

    }

    checkValidSpot( r:number, c:number) : BoardPiece {
        console.log(r,c)
        return {
            isValid: !this.boardArray[r][c],
            index: [r,c]
        };
    }



    clickBoard(x:number, y:number) : BoardPiece{

        
        let i = 0;
        let j = 0;
        let widthOfOneSpot = this.canvas.width/this.lengthOfCol;
        let heightOfOneSpot = this.canvas.height/this.lengthOfRow;
        

        //check if click is in cell boundaries
        while (i < this.lengthOfCol && j < this.lengthOfRow) {
            let checkCol = x > widthOfOneSpot*j && x < widthOfOneSpot*(j+1);
            let checkRow = y > heightOfOneSpot*i && y < heightOfOneSpot*(i+1);

            if (checkRow && checkCol) {
                break;
            }

            j++;

            if (j === this.lengthOfCol) {
                j = 0;
                i++;
            }

            if (i == this.lengthOfRow) {
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
        return {isValid:false,index:[]}
    }

    drawBoard() {
        
    }

    drawPieces() {

    }
    
    clickBoard(x:number,y:number) {
        return {isValid:false,index:[]}
    }
}