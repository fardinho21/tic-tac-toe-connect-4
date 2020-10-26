import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-game-end',
  templateUrl: './game-end.component.html',
  styleUrls: ['./game-end.component.css']
})
export class GameEndComponent implements OnInit {

  message : string;
  header : string;

  constructor(@Inject(MAT_DIALOG_DATA) public data : {result: string; piece:string}) { }

  ngOnInit(): void {
    if (this.data.result === "draw") {
      this.message = "The game is tied!"
      this.header = "Tie"
    } else if (this.data.piece === this.data.result) {
      this.message = "You win!"
      this.header = "Chicken Dinner"
    } else if (this.data.result != "draw" && this.data.result != this.data.piece){
      this.message = "You lose!"
      this.header = "Too Bad"
    }
  }

}
