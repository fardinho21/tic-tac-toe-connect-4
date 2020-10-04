import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GameManagerService } from "../../shared/game-manager.service";

@Component({
  selector: 'app-confirm-move',
  templateUrl: './confirm-move.component.html',
  styleUrls: ['./confirm-move.component.css']
})
export class ConfirmMoveComponent implements OnInit {

  confirmMoveClicked = false;

  constructor(@Inject(MAT_DIALOG_DATA) public move : any[], private gameManager : GameManagerService) { }


  ngOnInit(): void {
    this.confirmMoveClicked = false;
  }

  yes() {
    this.confirmMoveClicked = true;
    this.gameManager.confirmMove(this.move[0],this.move[1]);
  }

  no() {
    
  }

}
