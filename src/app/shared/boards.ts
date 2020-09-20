import { Subject } from "rxjs";
abstract class Board {

    public boardArray = []

    public canvas = new HTMLCanvasElement();
    public context : CanvasRenderingContext2D = this.canvas.getContext('2d');
    public canvasContextSubject = new Subject<HTMLCanvasElement>();

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
    
    setCanvasDimensions(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}

export class TicTacToeBoard extends Board{
    

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


        this.canvasContextSubject.next(this.canvas);
    }
}

export class ConnectFourBoard extends Board{

    checkForWinner() {

    }

    drawBoard() {


        this.canvasContextSubject.next(this.canvas);
    }
    
}