import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameManagerService } from 'src/app/shared/game-manager.service';

@Component({
  selector: 'app-against-pc',
  templateUrl: './against-pc.component.html',
  styleUrls: ['./against-pc.component.css']
})
export class AgainstPcComponent implements OnInit {


  mode : string ;

  constructor(private gameManager : GameManagerService) { }

  ngOnInit(): void {
  }

  setMode(value : string) {
    this.mode = value ;
  }

  onSubmit(form : NgForm) {

    const gInfo : GameInfo = {
      gameName: "name",
      gameType: form.value.gameType,
      hostName: this.gameManager.playerName,
      opponentPC: true,
      difficulty: form.value.gameDiff
    }

    this.gameManager.againstPC(gInfo)
  }

}
