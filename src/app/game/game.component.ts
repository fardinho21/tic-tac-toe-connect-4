import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameManagerService } from '../shared/game-manager.service';
import { QuitGameComponent } from './quit-game/quit-game.component';
import { NotValidComponent } from './not-valid/not-valid.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy, AfterViewInit {

  private gameInfoSubscription : Subscription; 
  private canvasSubscription : Subscription;

  @ViewChild('canvas', {static: false})
  private canvasElRef: ElementRef<HTMLCanvasElement>;
  private canvas : HTMLCanvasElement;
  private context : CanvasRenderingContext2D;
  private dialogRef: MatDialogRef<QuitGameComponent | NotValidComponent>;
  private playerPiece : string = "o";
  hostName : string = "host";
  opponentName : string = "opponent";
  turnBool : boolean = false;


  constructor(private gameManager: GameManagerService, private dialog: MatDialog, private router: Router) { 
    const gInfo = gameManager.getGameInfo();
    this.hostName = gInfo.hostName;
    this.opponentName = gInfo.opponentPC ? "Computer" : gInfo.opponentName;

    if (gInfo.opponentPC) {
      this.playerPiece = Math.floor(Math.random()*2)  === 1 ? "x" : "o";
    }
  }

  ngOnInit(): void {
    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {
      // this.hostName = gameInfo.hostName
      // this.opponentName = gameInfo.opponentName;

      if (!gameInfo) {
        this.router.navigate(['/lobby'])
      } 
      this.dialogRef.close();
    })
  }

  ngOnDestroy() {
    this.gameInfoSubscription.unsubscribe();
    this.canvasSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.canvas = this.canvasElRef.nativeElement;
    this.canvas.width = window.innerWidth*0.7;
    this.canvas.height = window.innerHeight*0.8;
    this.gameManager.startGame(this.canvas);
    
    if (this.gameManager.turn === this.playerPiece) {
      this.turnBool = true;
    }

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

    if (!this.turnBool) {
      return
    }

    let rect = this.canvas.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //console.log(event.clientX - rect.left, event.clientY - rect.top);
    let boardPiece : BoardPiece = this.gameManager.board.clickBoard(x,y)

    if (boardPiece.isValid){
      this.gameManager.board.placePiece(boardPiece,this.playerPiece)
      this.gameManager.board.drawBoardAndPieces();
    } else {
      this.dialogRef = this.dialog.open(NotValidComponent);
    }
  }

  onConfirmMove() {

  }

  onQuitGame() {
    this.dialogRef = this.dialog.open(QuitGameComponent)
  }
  

}
