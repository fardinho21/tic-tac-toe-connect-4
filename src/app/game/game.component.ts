import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameManagerService } from '../shared/game-manager.service';
import { QuitGameComponent } from './quit-game/quit-game.component';
import { NotValidComponent } from './not-valid/not-valid.component';
import { ConfirmMoveComponent } from "./confirm-move/confirm-move.component";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy, AfterViewInit {

  private gameInfoSubscription : Subscription; 
  private canvasSubscription : Subscription;
  private turnSubsription : Subscription;
  private assignedPieceSubscription : Subscription;

  @ViewChild('canvas', {static: false})
  private canvasElRef: ElementRef<HTMLCanvasElement>;
  private canvas : HTMLCanvasElement;
  private context : CanvasRenderingContext2D;
  private dialogRef: MatDialogRef<QuitGameComponent | NotValidComponent | ConfirmMoveComponent>;
  private playerPiece : string;
  hostName : string = "host";
  opponentName : string = "opponent";
  turnBool : boolean = false;
  clickedSpot : number[];


  constructor(private gameManager: GameManagerService, private dialog: MatDialog, private router: Router) { 
    const gInfo = gameManager.getGameInfo();
    this.hostName = gInfo.hostName;
    this.opponentName = gInfo.opponentPC ? "Computer" : gInfo.opponentName;
  }

  ngOnInit(): void {
    //subscriptions
    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {
      // this.hostName = gameInfo.hostName
      // this.opponentName = gameInfo.opponentName;

      if (!gameInfo) {
        this.router.navigate(['/lobby'])
      } 
      this.dialogRef.close();
    })

    this.turnSubsription = this.gameManager.playerTurnSubject.subscribe(turn => {
      
      this.clickedSpot = null;
      
      if (this.dialogRef) {
        this.dialogRef.close();
        this.dialogRef = null;
      }

      this.turnBool = turn ===  this.playerPiece ? true : false;
    })
  
    this.assignedPieceSubscription = this.gameManager.assignPieceSubject.subscribe(piece => {
      this.playerPiece = piece;
    })
  }

  ngOnDestroy() {
    this.gameInfoSubscription.unsubscribe();
    this.canvasSubscription.unsubscribe();
    this.turnSubsription.unsubscribe();
    this.assignedPieceSubscription.unsubscribe();
  }

  ngAfterViewInit() {

    this.canvas = this.canvasElRef.nativeElement;
    this.canvas.width = window.innerWidth*0.7;
    this.canvas.height = window.innerHeight*0.8;

    this.gameManager.startGame(this.canvas);

    //subscriptions
    this.canvasSubscription = this.gameManager.board.canvasSubject.subscribe((canvas : HTMLCanvasElement) => {
      this.canvas = canvas
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.gameManager.board.setCanvasDimensions(window.innerWidth*0.7, window.innerHeight*0.8)
    this.gameManager.board.drawBoardAndPieces();
  }

  onCanvasClick(event : MouseEvent) {

    //do nothing if it is not the player's turn
    if (!this.turnBool) {
      return
    }

    let rect = this.canvas.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    //get the board piece where user clicked
    let boardPiece : BoardPiece = this.gameManager.board.clickBoard(x,y)

    if (boardPiece.piece != "" && boardPiece.piece != this.playerPiece || boardPiece.set) {
      this.dialog.open(NotValidComponent);
      return
    }


    if (this.clickedSpot === boardPiece.index && boardPiece.piece === this.playerPiece) {
      this.gameManager.removePiece(this.clickedSpot)
      this.clickedSpot = null;
    } else if (!this.clickedSpot){
      this.clickedSpot = boardPiece.index
      this.gameManager.notFinalMove(this.clickedSpot, this.playerPiece);
    }

    
  }

  onConfirmMove() {
    this.dialogRef = this.dialog.open(ConfirmMoveComponent, {data: [this.clickedSpot,this.playerPiece]})
    this.clickedSpot = null;
  }

  onQuitGame() {
    this.dialogRef = this.dialog.open(QuitGameComponent)
  }
  

}
