import { Component, OnInit } from '@angular/core';
import { GameManagerService } from "../../shared/game-manager.service";

@Component({
  selector: 'app-quit-game',
  templateUrl: './quit-game.component.html',
  styleUrls: ['./quit-game.component.css']
})
export class QuitGameComponent implements OnInit {

  constructor(private gameManager: GameManagerService) { }

  ngOnInit(): void {
  }

  yes() {
    this.gameManager.quitGame()
  }

}
