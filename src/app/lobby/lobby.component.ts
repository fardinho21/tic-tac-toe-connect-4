import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HostGameComponent } from "./host-game/host-game.component";
import { JoinGameComponent } from "./join-game/join-game.component";


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  dataSource = new MatTableDataSource<GameInfo>();
  displayedColumns = ["gameName" ,"playerName", "gameType"];

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = [
      {playerName: "funkMaster100", gameType: "TicTacToe", gameName: "You cant beat"},
      {playerName: "connect4Mstr", gameType: "Connect4", gameName: "Casual"}
    ];
  }

  onHostGame() {
    this.dialog.open(HostGameComponent);
  }

  onClickRow(row : GameInfo) {
    this.dialog.open(JoinGameComponent, {data: row});
  }
}
