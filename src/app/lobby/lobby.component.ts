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
import { BackendService } from "../shared/backend.service";
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
  backendSubscription : Subscription;
  checkDataBase : number
  
  dataSource = new MatTableDataSource<GameInfo>();
  displayedColumns = ["gameName" ,"hostName", "gameType"];
  private dialogRef : MatDialogRef<HostGameComponent | JoinGameComponent | AgainstPcComponent | WaitingComponent>;

  constructor(
    private dialog : MatDialog, 
    private manager: ManagerService, 
    private gameManager: GameManagerService,
    private router: Router,
    private databaseManager: BackendService) { }

  ngOnInit(): void {

    this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(gameInfo => {
      //check close the dialog
      if (this.dialogRef) {
        this.dialogRef.close();
        this.dialogRef = null;
      }

      if (gameInfo.gameName === null) {
        return
      }

      if (gameInfo.opponentPC){
        this.router.navigate(['/game']);
      }    

      if (gameInfo.playersReady) {
        clearInterval(this.checkDataBase);
        this.router.navigate(['/game'])
      } else if (!gameInfo.playersReady) {
        if (gameInfo.hostName === this.gameManager.playerName) {
          this.dialogRef = this.dialog.open(WaitingComponent, {data :  {message: "Waiting for client to join.", isHost: true}})
        } else {
          this.dialogRef = this.dialog.open(WaitingComponent, {data :  {message: "Waiting for host's response.", isHost: false}})
        }
      }
    })

    this.backendSubscription = this.databaseManager.getBackEndSubject().subscribe(brResponse => {
      if (brResponse.extra === "logoutUser") {
        this.router.navigate(["/title"])
      } else if (brResponse.extra === "gameList") {
        clearInterval(this.checkDataBase)
        this.setGameList(brResponse)
        this.startDBQueryInterval();
      } else if (brResponse.extra === "gameDeleted") {
        clearInterval(this.checkDataBase)
        this.gameManager.clearGameInfo();
        this.setGameList(brResponse)
        this.startDBQueryInterval();
      }
    })

    this.startDBQueryInterval();
  }

  ngOnDestroy() {
    this.gameInfoSubscription.unsubscribe();
    this.backendSubscription.unsubscribe();
    
  }

  onExit() {

    this.databaseManager.logOut();
  }

  onHostGame() {
    const hostName = this.gameManager.playerName;
    this.dialogRef = this.dialog.open(HostGameComponent, {data : hostName});
  }

  onAgainstPC() {
    this.dialogRef = this.dialog.open(AgainstPcComponent);
  }

  onClickRow(row : GameInfo) {
    if (row.inSession) {
      return;
    }
    this.dialogRef = this.dialog.open(JoinGameComponent, {data: row});
  }

  getUserName() {
    return this.gameManager.playerName;
  }

  setGameList(brResponse : BackendResponse) {

    if (brResponse.gameList.length === 0) {
      this.dataSource.data = []
      return;
    }

    let gl : GameInfo[] = brResponse.gameList.map(document => {
      return {
        hostName: document.host,
        gameType: document.gameType,
        gameName: document.gameName,
        userId: document.hostId
      }
    })

    this.dataSource.data = gl;
  }

  startDBQueryInterval() {
    this.checkDataBase = setInterval(() => {
      console.log("fetching games")
      this.databaseManager.fetchGameList();
    },
    500)
  }
}
