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
  playerPiece : string;
  hostName : string = "host";
  opponentName : string = "opponent";
  turnBool : boolean = false;
  clickedSpot : number[];
  gameEnd : boolean = false;
  gInfo : GameInfo;
  gameState: GameState;
  previouslyUpdatedPiece: BoardPiece 
  
  dbQueryInterval : number;

  constructor(private gameManager: GameManagerService, private backendManager : BackendService, private dialog: MatDialog, private router: Router) { 
    this.gInfo = gameManager.getGameInfo();
    this.gameState = {
      gameMode:"",turn:"",hostPiece:"",clientPiece:"",hostName:"",clientName:"",
      gameOver:false,clientLeft:false,hostLeft:false,winner:"",board:[], lastUpdatedPiece: null
    }
    this.hostName = this.gInfo.hostName;
    this.opponentName = this.gInfo.opponentPC ? "Computer" : this.gInfo.opponentName;
  }

  ngOnInit(): void {
    //subscriptions
    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {

      if (!gameInfo.gameName) {
        
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
  
    if (this.opponentName === "Computer" ) {
      this.computerPieceSubscription = this.gameManager.computerPieceSubject.subscribe(piece => {
        this.playerPiece = piece;
      })

    }

    this.gameEndSubscription = this.gameManager.gameEndSubject.subscribe(check => {

      this.closeDialog();

      this.gameEnd = true;
      this.backendManager.declareWinner(this.gInfo,check,this.gameManager.playerName === this.hostName);
      this.onGameEnd(check)
    })

    if (this.opponentName != "Computer" || !this.gInfo.opponentPC) {

      this.backendSubscription = this.backendManager.backendSubject.subscribe(response => {
        if (response.extra === "gameStarted") {
          
          if (this.gameManager.playerName === this.hostName) {
            this.playerPiece = response.gameState.hostPiece;
          }
          this.turnBool = response.gameState.turn === this.playerPiece ? true : false;
        } else if (response.extra.msg) {
          if (response.extra.win != this.playerPiece) {
            this.updateBoardFromGameState(response);
            this.gameManager.endGame(response.extra.win);
            this.clearDBQueryInterval();
          }
        }else if (response.extra === "clientLeft") {
          console.log("client left")
        } else if (response.extra === "hostLeft") {
          console.log("client host")
        } else if (response.extra === "hostTurn") {
          this.turnBool = response.gameState.hostName === this.gameManager.playerName ? true : false;
        } else if (response.extra === "clientTurn") {
          this.turnBool = response.gameState.hostName != this.gameManager.playerName ? true : false;
        } else if (response.extra === "serverError") {
          console.log(response)
        } else if (response.extra === "moveConfirmed") {
          this.clearDBQueryInterval();
          this.gameState = response.gameState;
          this.startDBQueryInterval();
        } else if (response.extra === "winnerSet") {
          console.log("congratulations")
        }

        this.updateBoardFromGameState(response)
        
      })

    }
  }

  ngOnDestroy() {

    if (this.gameManager.playerName === this.hostName) {
      this.backendManager.deleteGame(this.gInfo);
      this.backendManager.deleteGameState(this.gameState)
    }

    this.gameInfoSubscription.unsubscribe();
    this.canvasSubscription.unsubscribe();
    this.turnSubsription.unsubscribe();
    try {
        this.computerPieceSubscription.unsubscribe();
    } catch(err) {
      console.log(err)
    }

    this.gameEndSubscription.unsubscribe();
    this.clearDBQueryInterval();
    this.closeDialog();
    this.clickedSpot = null;
    this.gameManager = null;
    
  }

  ngAfterViewInit() {

    this.canvas = this.canvasElRef.nativeElement;
    this.canvas.width = window.innerWidth*0.7;
    this.canvas.height = window.innerHeight*0.8;

    this.gameManager.startGame(this.canvas);

    if (!this.gInfo.opponentPC) {
      if (this.gameManager.playerName === this.hostName) {
        this.backendManager.startGame(this.gInfo, this.gameManager.board);
      }
      this.startDBQueryInterval();
    }
  
    //subscriptions
    this.canvasSubscription = this.gameManager.board.canvasSubject.subscribe((canvas : HTMLCanvasElement) => {
      this.canvas = canvas
    })


  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    try  {
      this.gameManager.board.setCanvasDimensions(window.innerWidth*0.7, window.innerHeight*0.8)
      this.gameManager.board.drawBoardAndPieces();
    } catch (err) {
      console.log(err)
    }

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
    this.dialogRef = this.dialog.open(ConfirmMoveComponent, {data: 
      {
        move: this.clickedSpot,
        playerPiece: this.playerPiece,
        gInfo: this.gInfo
      }
    });
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

  updateBoardFromGameState(response : BackendResponse) {
    try {
        
      if (!this.playerPiece) {
        if (this.gameManager.playerName === this.hostName) {
          this.playerPiece = response.gameState.hostPiece;
        } else {
          this.playerPiece = response.gameState.clientPiece;
        }
      }

      this.turnBool = response.gameState.turn === this.playerPiece ? true: false;
      this.gameState = response.gameState;

      if (!this.previouslyUpdatedPiece || this.gameState.lastUpdatedPiece.index != this.previouslyUpdatedPiece.index) {
        const index = this.gameState.lastUpdatedPiece.index;
        this.previouslyUpdatedPiece = this.gameState.lastUpdatedPiece;
        this.gameManager.board.boardArray[index[0]][index[1]] = this.gameState.lastUpdatedPiece;
        this.gameManager.board.drawBoardAndPieces();
      }
    } catch (error) {
      console.log(error)
    }
  }

  startDBQueryInterval() {
    this.dbQueryInterval = setInterval(() => {
      this.backendManager.checkGameState(this.gInfo, this.hostName === this.gameManager.playerName);
    }, 1000);
  }

  clearDBQueryInterval() {
    clearInterval(this.dbQueryInterval)
  }
}
