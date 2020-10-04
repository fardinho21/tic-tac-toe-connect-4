import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { Board } from "./abstract.board";

export class TicTacToeBoard extends Board{
    
    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 3, 3);
        this.emptySpots = 9;
        this.unsetAndEmptySpots = 9;
        this.drawBoardAndPieces();
        console.log(this.boardArray);
    }

    checkForWinner() : string {

        let checkDiag1 = false;
        let checkDiag2 = false;
        let prevP1 = null;
        let prevP2 = null;
        for (let d = 0; d < 3; d++) {

            let p1 = this.boardArray[d][d].piece
            let p2 = this.boardArray[2 - d][d].piece

            if (prevP1 === null) {
                prevP1 = p1;
            } else if (prevP1 != p1){
                checkDiag1 = false;
            } else if (prevP1 === p1) {
                checkDiag1 = true;
            }



            if (prevP2 === null) {
                prevP2 = p2;
            } else if (prevP2 != p2) {
                checkDiag2 = false;
            } else if (prevP2 === p2) {
                checkDiag2 = true;
            }


        }

        if (checkDiag1){
            return this.boardArray[0][0].piece
        } else if (checkDiag2) {
            return this.boardArray[2][0].piece
        }
        //check rows
        for (let r = 0; r < 3; r++) {
            let currentRow : BoardPiece[] = this.boardArray[r];
            let str : string = this.rowColToString(currentRow)

            if (str === "xxx") {
                return "x"
            } else if (str == "ooo") {
                return "o"
            }
            
        }

        //check cols 
        let row0 : BoardPiece[] = this.boardArray[0];
        let row1 : BoardPiece[] = this.boardArray[1];
        let row2 : BoardPiece[] = this.boardArray[2];

        for (let c = 0; c < 3; c++) {
            let currentCol : BoardPiece[] = [row0[c],row1[c],row2[c]]
            let str : string = this.rowColToString(currentCol);

            if (str === "xxx") {
                return "x"
            } else if (str == "ooo") {
                return "o"
            }
        }
        return ""
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


    rowColToString(rc : BoardPiece[]) {
       return rc.map((rc : BoardPiece) => {
            return rc.piece;
        }).join("")
    }

    printBoard() {
        let str = []
        for (let r = 0; r < 3; r++) {
            let rowStr = this.boardArray[r].map( (bp : BoardPiece) => {

                return bp.piece ? bp.piece : "_"
            })
            str.push(rowStr.join(""))
        }
        return str;
    }


}