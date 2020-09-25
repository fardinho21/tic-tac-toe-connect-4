import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { TicTacToeBoard, ConnectFourBoard } from "./boards";
@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  gameInfoSubject = new Subject<GameInfo>();
  playerTurnSubject = new Subject<string>();
  board : TicTacToeBoard | ConnectFourBoard = null;
  private gameInfo : GameInfo;
  playerName : string ;
  turn : string;

  constructor() { }

  hostGame(gameInfo : GameInfo) {
    this.setGameInfo(gameInfo)
  }

  againstPC(gameInfo : GameInfo){
    this.setGameInfo(gameInfo)
  }

  joinGame(gameInfo : GameInfo) {
    this.setGameInfo(gameInfo)
  }

  quitGame() {
    this.clearGameInfo();
  }

  startGame(canvas : HTMLCanvasElement) {

    //this.turn = Math.floor(Math.random()*2)  === 1 ? "x" : "o";
    this.turn = "o";
    this.playerTurnSubject.next(this.turn);

    //set the board
    if (this.gameInfo.gameType === "TTT") {
      this.board = new TicTacToeBoard(canvas);
    } else if (this.gameInfo.gameType === "CF") {
      this.board = new ConnectFourBoard(canvas);
    }

  }

  nextTurn() {
    this.turn = this.turn === "x" ? "o" : "x";
    this.playerTurnSubject.next(this.turn);
  }

  setGameInfo(gameInfo : GameInfo) {
    this.gameInfo = gameInfo;
    this.gameInfoSubject.next(gameInfo);
  }

  getGameInfo() {
    return this.gameInfo;
  }

  clearGameInfo() {
    this.gameInfo = null;
    this.gameInfoSubject.next(this.gameInfo);
  }

}
