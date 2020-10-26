import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BackendService } from 'src/app/shared/backend.service';
import { GameManagerService } from "../../shared/game-manager.service";

@Component({
  selector: 'app-confirm-move',
  templateUrl: './confirm-move.component.html',
  styleUrls: ['./confirm-move.component.css']
})
export class ConfirmMoveComponent implements OnInit {

  confirmMoveClicked = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data : {move : number[], playerPiece : string, gInfo: GameInfo}, 
  private gameManager : GameManagerService, private backendManager: BackendService) { }


  ngOnInit(): void {
    this.confirmMoveClicked = false;
  }

  yes() {
    this.confirmMoveClicked = true;
    const gInfo = this.data.gInfo;
    if (!gInfo.opponentPC) {
      this.backendManager.confirmMove(gInfo, this.gameManager.playerName === gInfo.hostName, this.data.move)
    }
    
    this.gameManager.confirmMove(this.data.move,this.data.playerPiece);
  }

  no() {
    
  }

}
