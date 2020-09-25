import { Component, OnInit } from '@angular/core';
import { GameManagerService } from "../../shared/game-manager.service";

@Component({
  selector: 'app-confirm-move',
  templateUrl: './confirm-move.component.html',
  styleUrls: ['./confirm-move.component.css']
})
export class ConfirmMoveComponent implements OnInit {

  constructor(private gameManager : GameManagerService) { }

  ngOnInit(): void {
  }

  yes() {
    this.gameManager.nextTurn();
  }

}
