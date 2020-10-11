import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/shared/backend.service';
import { GameManagerService } from 'src/app/shared/game-manager.service';
@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit, OnDestroy {

  backendSubscription : Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public gameInfo : GameInfo,
    private gameManager: GameManagerService,
    private backendManager: BackendService) { }

  ngOnInit(): void {
    console.log(this.gameInfo)
    this.backendSubscription = this.backendManager.backendSubject.subscribe((brResponse : BackendResponse)=> {
      if (brResponse.extra === "gameFound:Waiting") {
        this.gameManager.setGameInfo(this.gameInfo);
      }
    })
  }

  ngOnDestroy() {
    this.backendSubscription.unsubscribe();
  }


  onJoin() {
    this.backendManager.joinGame(this.gameInfo, this.gameManager.playerName)
  }
}
