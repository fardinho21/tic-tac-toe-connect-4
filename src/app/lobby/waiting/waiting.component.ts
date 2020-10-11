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
  clientName : string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {message: string, isHost: boolean},
    private backendManager: BackendService, 
    private gameManager: GameManagerService ) { }

  ngOnInit(): void {
    this.gInfo = this.gameManager.getGameInfo();

    this.backendSubscription = this.backendManager.backendSubject.subscribe(response => {
      if (response.extra === "gameJoin") {
        this.data.message = "Joining game!"
        this.gameManager.joinGame(this.gInfo);
      } else if (response.extra === "hostDenied") {
        this.data.message = "Host denied"
      } else if (response.extra === "waitingOnHostResponse") {
        this.data.message = "Waiting for host's response."
      } else if (response.extra === "cancelWaiting") {
        this.data.message = "Client left"
      } else if (response.extra === "waitingForClient") {
        this.data.message = "Waiting for client to join..."
      } else if (response.extra.message === "clientIsWaiting") {
        this.data.message = response.extra.client + " would like to play."
        this.clientName = response.extra.client;
        this.confirm = true;
      }
    })

    this.startDBQueryInterval(this.data.isHost);
  }

  ngOnDestroy() { 
    this.backendManager.deleteGame(this.gInfo);
    this.backendSubscription.unsubscribe();
    clearInterval(this.checkDataBase);
  }

  yes() {
    clearInterval(this.checkDataBase)
    this.gInfo.opponentName = this.clientName;
    this.gInfo.playersReady = true;
    this.backendManager.confirmClient(this.gInfo, this.gInfo.userId)
    this.confirm = false;
    this.data.message = "Fetching from database..."
  }

  no() {

  }

  startDBQueryInterval(isHost : boolean) {

    this.checkDataBase = setInterval(() => {
      this.backendManager.check(this.gInfo, this.gInfo.userId, isHost)
    }, 1000)
  }

}
