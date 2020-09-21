import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameManagerService } from '../shared/game-manager.service';
import { QuitGameComponent } from './quit-game/quit-game.component';


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
  private dialogRef: MatDialogRef<QuitGameComponent>;
  canvasWidth = 450;
  canvasHeight = 450;

  constructor(private gameManager: GameManagerService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {


    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {
      this.dialogRef.close();
      this.router.navigate(['/lobby'])
    })
  }

  ngOnDestroy() {
    this.gameInfoSubscription.unsubscribe();
    this.canvasSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.canvas = this.canvasElRef.nativeElement;
    this.canvasWidth = window.innerWidth*0.7;
    this.gameManager.startGame(this.canvas);

    this.canvasSubscription = this.gameManager.board.canvasSubject.subscribe((canvas : HTMLCanvasElement) => {
      this.canvas = canvas
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.gameManager.board.setCanvasDimensions(window.innerWidth*0.7)
    this.gameManager.board.drawBoard()
  }


  onConfirmMove() {

  }

  onQuitGame() {
    this.dialogRef = this.dialog.open(QuitGameComponent)
  }
  

}
