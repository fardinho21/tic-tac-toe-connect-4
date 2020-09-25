import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { TicTacToeBoard, ConnectFourBoard } from "./boards";
import { ComputerPlayer } from "../shared/player";

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
  pc : ComputerPlayer;

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
      this.turn = Math.floor(Math.random()*2)  === 1 ? "x" : "o";
      this.playerTurnSubject.next(this.turn);
      this.board = new TicTacToeBoard(canvas);
      if (this.gameInfo.opponentPC) {
        const pcPiece = this.turn === "o" ? "x" : "o";
        this.pc = new ComputerPlayer(pcPiece,false,this.gameInfo.difficulty,this);
      }
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
