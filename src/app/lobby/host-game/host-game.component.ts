import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { NgForm } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

//services
import { GameManagerService } from "../../shared/game-manager.service";
import { BackendService } from "../../shared/backend.service";
@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html',
  styleUrls: ['./host-game.component.css']
})
export class HostGameComponent implements OnInit, OnDestroy {

  backendSubscription : Subscription;
  gInfo : GameInfo;

  constructor(
    @Inject(MAT_DIALOG_DATA) private hostName : string, 
    private router: Router,
    private backendManager: BackendService,
    private gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.backendSubscription = this.backendManager.backendSubject.subscribe(response => {
      if (response.extra != "gameHosted") {
        console.log("error occured")
      } else if (response.extra === "gameHosted") {
        this.gameManager.hostGame(this.gInfo);
      }
    })
  }

  ngOnDestroy() {
    this.backendSubscription.unsubscribe();
  }


  onHost(form : NgForm) {

    this.gInfo = {
      gameName: form.value.gameName,
      gameType: form.value.gameType,
      userId: this.backendManager.userId,
      hostName: this.hostName,
      playersReady: false,
      host: true,
      opponentPC: false
    }

   this.backendManager.hostGame(this.gInfo)

  }

}
