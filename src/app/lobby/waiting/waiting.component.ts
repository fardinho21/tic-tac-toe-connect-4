import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/shared/backend.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit, OnDestroy {

  checkDataBase : number;
  backendSubscription : Subscription;
  gInfo : GameInfo;
  confirm : boolean = false;
  denied : boolean = false;
  clientName : string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {message: string, isHost: boolean},
    private backendManager: BackendService, 
    private gameManager: GameManagerService ) { }

  ngOnInit(): void {
    this.gInfo = this.gameManager.getGameInfo();
    this.gInfo.inSession = true;

    this.backendSubscription = this.backendManager.getBackEndSubject().subscribe(response => {
      if (response.extra === "gameJoin") {
        this.data.message = "Joining game!"
        this.clearDBInterval();
        this.gameManager.joinGame(this.gInfo);
      } else if (response.extra === "hostDenied") {
        this.confirm = true;
        this.denied = true;
        this.data.message = "Host denied";
      } else if (response.extra === "waitingOnHost" && !this.denied) {
        this.data.message = "Waiting for host's response."
      } else if (response.extra === "waitingForClient") {
        this.confirm = false
        this.data.message = "Waiting for client to join..."
      } else if (response.extra === "clientIsWaiting") {
        this.data.message = response.client + " would like to play."
        this.clientName = response.client;
        this.confirm = true;
      } else if (response.extra === "gameCancelled"){
        this.backendManager.deleteGame(this.gInfo)
      } else if (response.extra === "clientLeft") {
        this.gameManager.clearGameInfo();
      }
    })

    this.startDBQueryInterval(this.data.isHost);
  }

  ngOnDestroy() { 
    //this.backendManager.deleteGame(this.gInfo);
    this.backendSubscription.unsubscribe();
    this.clearDBInterval();
  }

  toLobby() {
    this.clearDBInterval()
    this.gInfo.inSession = false;
    this.backendManager.cancelWaiting(this.gInfo, this.data.isHost)
  }

  onDenied() {
    this.clearDBInterval()
    this.gInfo.inSession = false;
    this.gameManager.clearGameInfo();
  }

  yes() {
    this.clearDBInterval();
    this.gInfo.opponentName = this.clientName;
    this.gInfo.playersReady = true;
    this.confirm = false;
    this.data.message = "Fetching from database..."
    this.backendManager.confirmClient(this.gInfo, this.gInfo.userId)
  }

  no() {
    this.clearDBInterval();
    this.confirm = false;
    this.backendManager.denyClient(this.gInfo, this.gInfo.userId)
    this.startDBQueryInterval(this.data.isHost)

  }

  startDBQueryInterval(isHost : boolean) {

    this.checkDataBase = setInterval(() => {
      this.backendManager.check(this.gInfo, this.gInfo.userId, isHost)
    }, 1000)
  }

  clearDBInterval() {
    if (this.checkDataBase) {
      clearInterval(this.checkDataBase)
    }
  }
}
