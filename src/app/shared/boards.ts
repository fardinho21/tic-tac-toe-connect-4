import { Subject } from "rxjs";

abstract class Board {

    constructor(canvas : HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.setCanvasDimensions(this.canvas.width,this.canvas.height);
        this.drawBoard();
    }

    public boardArray = []

    public canvas : HTMLCanvasElement;
    public context : CanvasRenderingContext2D;
    public canvasSubject = new Subject<HTMLCanvasElement>();

    abstract async checkForWinner();

    abstract drawBoard();

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
        super(canvas);
    }

    checkForWinner() {
        let checkDiag1 = (this.boardArray[0] === this.boardArray[4]) && (this.boardArray[0] === this.boardArray[7])
        let checkDiag2 = (this.boardArray[2] === this.boardArray[4]) && (this.boardArray[2] === this.boardArray[6])

        if (checkDiag1 || checkDiag2) {
            return checkDiag1 ? { win: this.boardArray[0], coord: [0, 4, 7] } : { win: this.boardArray[2], coord: [2, 4, 6] };
        }

        let i = 0;
        //check rows
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


        let i = this.canvas.width/3
        while (i < this.canvas.width) {
            this.context.beginPath() 
            this.context.moveTo(i,0);
            this.context.lineTo(i,this.canvas.height);
            i+=this.canvas.width/3;
            this.context.stroke()
        }

        i = this.canvas.height/3

        while (i < this.canvas.height) {
            this.context.beginPath() 
            this.context.moveTo(0,i);
            this.context.lineTo(this.canvas.width,i);
            i+=this.canvas.height/3;
            this.context.stroke()
        }


        this.canvasSubject.next(this.canvas);
    }

}

export class ConnectFourBoard extends Board{

    constructor(canvas : HTMLCanvasElement) {
        super(canvas);
    }

    checkForWinner() {

    }

    drawBoard() {


        this.canvasSubject.next(this.canvas);
    }
    
}