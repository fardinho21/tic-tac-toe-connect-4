import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GameManagerService } from "../../shared/game-manager.service";

@Component({
  selector: 'app-confirm-move',
  templateUrl: './confirm-move.component.html',
  styleUrls: ['./confirm-move.component.css']
})
export class ConfirmMoveComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public move : any[], private gameManager : GameManagerService) { }

  ngOnInit(): void {
  }

  yes() {
    this.gameManager.confirmMove(this.move[0],this.move[1]);
  }

}
