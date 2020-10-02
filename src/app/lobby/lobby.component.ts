import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
//components
import { HostGameComponent } from "./host-game/host-game.component";
import { JoinGameComponent } from "./join-game/join-game.component";
import { AgainstPcComponent } from "./against-pc/against-pc.component";
import { WaitingComponent } from "./waiting/waiting.component";
//services
import { ManagerService } from "../shared/manager.service";
import { GameManagerService } from '../shared/game-manager.service';
//rxjs
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {

  //subscriptions
  gameInfoSubscription : Subscription;

  
  dataSource = new MatTableDataSource<GameInfo>();
  displayedColumns = ["gameName" ,"hostName", "gameType"];
  private dialogRef : MatDialogRef<HostGameComponent | JoinGameComponent | AgainstPcComponent | WaitingComponent>;

  constructor(
    private dialog : MatDialog, 
    private manager: ManagerService, 
    private gameManager: GameManagerService,
    private router: Router) { }

  ngOnInit(): void {
    this.dataSource.data = [
      {hostName: "funkMaster100", gameType: "TicTacToe", gameName: "You cant beat", opponentPC: false},
      {hostName: "connect4Mstr", gameType: "Connect4", gameName: "Casual", opponentPC: false}
    ];//dummy data

    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {
      //check close the dialog
      if (this.dialogRef) {
        this.dialogRef.close();
        this.dialogRef = null;
      }

      if (gameInfo.opponentPC){
        this.router.navigate(['/game']);
      }

      
      if (gameInfo.host) {
        this.dialogRef = this.dialog.open(WaitingComponent, {data :  "Waiting for opponent."})

        setTimeout(() => {
          this.dialogRef.close()
          this.dialogRef = null;
          this.router.navigate(['/game'])
        }, 4000);
      } 


    })
  }

  ngOnDestroy() {
    this.gameInfoSubscription.unsubscribe();
  }

  onHostGame() {
    const hostName = this.gameManager.playerName;
    this.dialogRef = this.dialog.open(HostGameComponent, {data : hostName});
  }

  onAgainstPC() {
    this.dialogRef = this.dialog.open(AgainstPcComponent);
  }

  onClickRow(row : GameInfo) {
    this.dialogRef = this.dialog.open(JoinGameComponent, {data: row});
  }

  getUserName() {
    return this.gameManager.playerName;
  }
}
