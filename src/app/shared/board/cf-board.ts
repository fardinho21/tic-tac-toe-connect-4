import { Board } from "./abstract.board";

export class ConnectFourBoard extends Board{

    constructor(canvas : HTMLCanvasElement) {
        super(canvas, 6, 7);
        this.emptySpots = 42;
        this.unsetAndEmptySpots = 42;
        this.drawBoardAndPieces();

    }

    checkForWinner() : string{
        return ""
    }
    
    getBoardPiece(r:number,c:number){
        return {index: [], set: false, piece: ""}
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

    }
    
    clickBoard(x:number,y:number) {
        return {index: [], set: false, piece: ""}
    }

    rowColToString(rc : BoardPiece[]) {
        return ""
    }

    printBoard() {
        return []
    }
}