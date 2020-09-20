import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public gameInfo : GameInfo) { }

  ngOnInit(): void {
    console.log(this.gameInfo)
  }

}
