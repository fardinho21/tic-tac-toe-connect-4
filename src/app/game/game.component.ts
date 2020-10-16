import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameManagerService } from '../shared/game-manager.service';
import { QuitGameComponent } from './quit-game/quit-game.component';
import { NotValidComponent } from './not-valid/not-valid.component';
import { ConfirmMoveComponent } from "./confirm-move/confirm-move.component";
import { GameEndComponent } from "./game-end/game-end.component";
import { BackendService } from '../shared/backend.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy, AfterViewInit {

  private gameInfoSubscription : Subscription; 
  private canvasSubscription : Subscription;
  private turnSubsription : Subscription;
  private computerPieceSubscription : Subscription;
  private backendSubscription : Subscription;
  gameEndSubscription : Subscription;

  @ViewChild('canvas', {static: false})
  private canvasElRef: ElementRef<HTMLCanvasElement>;
  private canvas : HTMLCanvasElement;
  private context : CanvasRenderingContext2D;
  private dialogRef: MatDialogRef<any>;
  private playerPiece : string;
  hostName : string = "host";
  opponentName : string = "opponent";
  turnBool : boolean = false;
  clickedSpot : number[];
  gameEnd : boolean = false;
  gInfo : GameInfo;
  
  dbQueryInterval : number;

  constructor(private gameManager: GameManagerService, private backendManager : BackendService, private dialog: MatDialog, private router: Router) { 
    this.gInfo = gameManager.getGameInfo();
    this.hostName = this.gInfo.hostName;
    this.opponentName = this.gInfo.opponentPC ? "Computer" : this.gInfo.opponentName;
  }

  ngOnInit(): void {
    //subscriptions
    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {

      if (!gameInfo) {
        
        this.closeDialog();
        this.turnBool = false;
        this.playerPiece = null;
        this.clickedSpot = null;
        this.router.navigate(['/lobby'])
      } 

    })

    this.turnSubsription = this.gameManager.playerTurnSubject.subscribe(turn => {
      
      this.clickedSpot = null;
      
      this.closeDialog();

      this.turnBool = turn ===  this.playerPiece ? true : false;
    })
  
    if (this.opponentName == "Computer" ) {
      this.computerPieceSubscription = this.gameManager.computerPieceSubject.subscribe(piece => {
        this.playerPiece = piece;
      })

    }

    this.gameEndSubscription = this.gameManager.gameEndSubject.subscribe(check => {

      this.closeDialog();

      this.gameEnd = true;
      this.onGameEnd(check)
    })

    if (this.opponentName != "Computer" || !this.gInfo.opponentPC) {

      this.backendSubscription = this.backendManager.backendSubject.subscribe(response => {
        if (response.extra === "gameStarted") {

        } 
      })

      this.backendManager.startGame(this.gInfo);

    }
  }

  ngOnDestroy() {
    this.gameInfoSubscription.unsubscribe();
    this.canvasSubscription.unsubscribe();
    this.turnSubsription.unsubscribe();
    this.computerPieceSubscription.unsubscribe();
    this.gameEndSubscription.unsubscribe();
    this.closeDialog();
    this.clickedSpot = null;
    this.gameManager = null;
    
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
    } else if (this.gameEnd) {
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
  }

  onQuitGame() {
    this.dialogRef = this.dialog.open(QuitGameComponent)
  }
  
  onGameEnd(result : string ) {
    this.dialogRef = this.dialog.open(GameEndComponent, {data: {result: result, piece: this.playerPiece}} )
  }

  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close()
    }
    this.dialogRef=null;
  }

  startDBQueryInterval() {
    this.dbQueryInterval = setInterval(() => {
      this.backendManager.checkGameState();
    }, 1000);
  }
}
