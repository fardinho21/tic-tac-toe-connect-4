import { Board } from "./abstract.board";

export class TicTacToeBoard extends Board{
    
    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 3, 3);
        this.drawBoardAndPieces();
        console.log(this.boardArray);
    }

    checkForWinner() {


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
        while (true) {
            
            let piece = this.boardArray[i][j];
            this.context.beginPath()
            if (piece.piece === "x") {

                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.25),heightOfOneSpot*(i+0.25));
                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.75),heightOfOneSpot*(i+0.25));
                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.25),heightOfOneSpot*(i+0.75));
                this.context.moveTo(widthOfOneSpot*(j+0.5),heightOfOneSpot*(i+0.5));
                this.context.lineTo(widthOfOneSpot*(j+0.75),heightOfOneSpot*(i+0.75));

            } else if (piece.piece === "o") {
                this.context.ellipse(
                    widthOfOneSpot*(j+0.5),
                    heightOfOneSpot*(i+0.5),
                    widthOfOneSpot*0.25,
                    heightOfOneSpot*0.25,0,0,Math.PI*2);
            }
            this.context.stroke();
            j++;

            if (j > this.lengthOfCol - 1) {
                j = 0;
                i++;
            }
    

            if (i > this.lengthOfRow - 1) {
                break;
            }
            
        }
        this.context.lineWidth = 1;

        

    }

    getBoardPiece( r:number, c:number) : BoardPiece {
        console.log(r,c)
        return this.boardArray[r][c]
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
        
        let piece = this.getBoardPiece(i,j);
        return piece;
    }


}