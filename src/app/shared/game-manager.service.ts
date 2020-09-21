import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { TicTacToeBoard, ConnectFourBoard } from "./boards";
@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  gameInfoSubject = new Subject<GameInfo>();
  board : TicTacToeBoard | ConnectFourBoard = null;
  private gameInfo : GameInfo;

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
    //set the board
    if (this.gameInfo.gameType === "TTT") {
      this.board = new TicTacToeBoard(canvas);
    } else if (this.gameInfo.gameType === "CF") {
      this.board = new ConnectFourBoard(canvas);
    }

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
