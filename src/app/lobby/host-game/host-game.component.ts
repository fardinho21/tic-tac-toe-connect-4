import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

//services
import { GameManagerService } from "../../shared/game-manager.service";
@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html',
  styleUrls: ['./host-game.component.css']
})
export class HostGameComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private hostName : string, private router: Router, private gameManager: GameManagerService) { }

  ngOnInit(): void {
  }

  onStart(form : NgForm) {

    const gInfo : GameInfo = {
      gameName: form.value.gameName,
      gameType: form.value.gameType,
      hostName: this.hostName,
      host: true,
      opponentPC: false
    }
    this.gameManager.hostGame(gInfo);

  }

}
