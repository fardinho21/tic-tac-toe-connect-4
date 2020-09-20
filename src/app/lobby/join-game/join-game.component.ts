import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GameManagerService } from 'src/app/shared/game-manager.service';
@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public gameInfo : GameInfo,
    private gameManager: GameManagerService) { }

  ngOnInit(): void {
    console.log(this.gameInfo)
  }


  onJoin() {
    this.gameManager.joinGame(this.gameInfo);
  }
}
