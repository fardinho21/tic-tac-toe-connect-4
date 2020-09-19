import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  data = new MatTableDataSource<GameInfo>();
  displayedColumns : GameInfo[] = [
    {playerName: "funkMaster100", gameType: "TicTacToe"},
    {playerName: "connect4Mstr", gameType: "Connect4"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
