import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

//services
import { GameManagerService } from "../../shared/game-manager.service";
@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html',
  styleUrls: ['./host-game.component.css']
})
export class HostGameComponent implements OnInit {

  constructor(private router: Router, private gameManager: GameManagerService) { }

  ngOnInit(): void {
  }

  onStart(form : NgForm) {

    const gInfo : GameInfo = {
      gameName: form.value.gameName,
      gameType: form.value.gameType,
      playerName: 'name',
      host: true
    }
    this.gameManager.hostGame(gInfo);

  }

}
