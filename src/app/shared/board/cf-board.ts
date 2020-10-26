import { Board } from "./abstract.board";

export class ConnectFourBoard extends Board{

    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 6, 7);
        this.emptySpots = 42;
        this.unsetAndEmptySpots = 42;
        this.drawBoardAndPieces();

    }

    checkForWinner(move?: number[]) : string {

        let rowStr = this.getRow(move[0])
        const resultRow = this.checkForWinningString(rowStr)
        if (resultRow) {
            return resultRow;
        }

        let colStr = this.getCol(move[1]);
        const resultCol = this.checkForWinningString(colStr);
        if (resultCol) {
            return resultCol;
        }

        let diags = this.getDiagonalsAtMove(move);
        const resultDiag0 = this.checkForWinningString(diags[0])
        const resultDiag1 = this.checkForWinningString(diags[1])

        if (resultDiag0) {
            return resultDiag0
        }

        if (resultDiag1) {
            return resultDiag1
        }

        return ""
    }
    
    getBoardPiece(r:number,c:number){
        return this.boardArray[r][c];
    }

    getDropPieceIndex(move : number[]) : number[] {
        let column = this.boardArray.map((row : BoardPiece[]) => {
            return row[move[1]];
        })
        for (let r = 0; r < column.length; r++) {

            if (!column[r].set && column[r].piece) {
                return [r, move[1]]
            }

            if (column[r].piece && r - 1 >= 0 && column[r].set) {
                return [r-1,move[1]];
            } else if (r === column.length - 1) {
                return [r,move[1]]
            }
        }
        return [-1,-1]

    }

    checkForWinningString(rc : string) : string {
        if (rc.includes("yyyy")) {
            return "y";
        } else if (rc.includes("rrrr")) {
            return "r";
        }
        return ""
    }

    getDiagonalsAtMove(move : number[]) : string[] {
        return this.traverseDiagonal("", move[0], move[1], "topRight", move, []);
    }

    drawBoard() {


        const widthOfOneSpot = this.canvas.width/this.lengthOfRow;
        const heightOfOneSpot = this.canvas.height/this.lengthOfCol

        this.context.beginPath()
        this.context.rect(0,0, this.canvas.width, this.canvas.height)
        this.context.fillStyle = "#5d8ed0"
        this.context.fill()

        


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

        i = 0;
        let j = 0;


        while (true) {

            this.context.beginPath();
            this.context.fillStyle = "white";
            this.context.ellipse(
                widthOfOneSpot*(j+0.5),
                heightOfOneSpot*(i+0.5),
                widthOfOneSpot*0.25,
                heightOfOneSpot*0.25,0,0,Math.PI*2
            );
            this.context.fill();

            i++;
            if (i > this.lengthOfCol - 1) {
                i = 0;
                j++;
            } 
            if (j > this.lengthOfRow - 1) {
                break;
            }
        }
    }

    drawPieces() {
        let i = 0;
        let j = 0;

        const widthOfOneSpot = this.canvas.width/this.lengthOfRow
        const heightOfOneSpot = this.canvas.height/this.lengthOfCol


        while(true) {
            const piece = this.boardArray[i][j];
            this.context.beginPath();

            if (piece.piece === "r") {
                this.context.fillStyle = "#922725";
            } else if (piece.piece === "y") {
                this.context.fillStyle = "#CAAB04"
            } else {
                this.context.fillStyle = "white"
            }

            this.context.ellipse(
                widthOfOneSpot*(j+0.5),
                heightOfOneSpot*(i+0.5),
                widthOfOneSpot*0.25,
                heightOfOneSpot*0.25,0,0,Math.PI*2
            );
            this.context.fill();

            i++;
            if (i > this.lengthOfCol - 1) {
                i = 0;
                j++;
            } 
            if (j > this.lengthOfRow - 1) {
                break;
            }

        }

    }
    
    clickBoard(x:number,y:number) : BoardPiece {

        let i = 0;
        let j = 0;

        const widthOfOneSpot = this.canvas.width/this.lengthOfRow
        const heightOfOneSpot = this.canvas.height/this.lengthOfCol

        while (i < this.lengthOfCol && j < this.lengthOfRow) {
            let checkCol = x > widthOfOneSpot*j && x < widthOfOneSpot*(j+1);
            let checkRow = y > heightOfOneSpot*i && y < heightOfOneSpot*(i+1);

            if (checkRow && checkCol) {
                break;
            }

            j++;

            if (j === this.lengthOfRow) {
                j = 0;
                i++;
            }

            if (i === this.lengthOfCol) {
                break;
            }
        }
        
        let dropIdx = this.getDropPieceIndex([i,j])
        
        return this.getBoardPiece(dropIdx[0],dropIdx[1])
    }

    rowColToString(rc : BoardPiece[]) {
        return ""
    }

    getRow(r : number) : string {
        return this.boardArray[r].map((boardPiece : BoardPiece) => {
            return boardPiece.piece ? boardPiece.piece : "-";
        }).join("")
    }

    getCol(c : number) : string {
        return this.boardArray.map((row : BoardPiece[]) => {
            return row[c].piece ? row[c].piece : "-";
        }).join("")
    }   

    printBoard() {
        return []
    }

    traverseDiagonal(runningDiag: string, r : number, c : number, direction: string, initial: number[], diags: string[]) : string[] {

        if (!runningDiag || (r != initial[0] && c != initial[1])) {
            if (direction === "topRight" || direction === "topLeft") {
                runningDiag += this.boardArray[r][c].piece ? this.boardArray[r][c].piece : "-";
            } else if (direction === "bottomRight" || direction === "bottomLeft") {
                let value = this.boardArray[r][c].piece ? this.boardArray[r][c].piece : "-"
                value += runningDiag;
                runningDiag = value;
            }
        }

        if ((r === 0 || c === this.lengthOfRow - 1) && direction === "topRight") { //reached top right
            return this.traverseDiagonal(runningDiag, initial[0], initial[1], "bottomLeft", initial, diags);
        } else if ((r === this.lengthOfCol - 1 || c === 0) && direction === "bottomLeft") {//reached bottom left
            diags[0] = runningDiag;
            return this.traverseDiagonal("", initial[0], initial[1], "topLeft", initial, diags);
        } else if ((r === 0 || c === 0) && direction === "topLeft") {
            return this.traverseDiagonal(runningDiag, initial[0], initial[1], "bottomRight", initial, diags)
        } else if ((r === this.lengthOfCol - 1 || c === this.lengthOfRow - 1 ) && direction === "bottomRight" ) {
            diags[1] = runningDiag;
            return diags;
        }

        if (direction === "topRight") {
            return this.traverseDiagonal(runningDiag, --r, ++c, "topRight", initial, diags);
        } else if (direction === "topLeft") {
            return this.traverseDiagonal(runningDiag, --r, --c, "topLeft", initial, diags);
        } else if (direction === "bottomLeft") {
            return this.traverseDiagonal(runningDiag, ++r, --c, "bottomLeft", initial, diags)
        } else if (direction === "bottomRight") {
            return this.traverseDiagonal(runningDiag, ++r, ++c, "bottomRight", initial, diags)
        }

        
    }
}