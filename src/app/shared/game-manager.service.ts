import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { TicTacToeBoard } from "./board/ttt-board";
import { ConnectFourBoard} from "./board/cf-board";
import { ComputerPlayer } from "./player/player";

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  private gameInfo : GameInfo;
  private assignedPiece : string ;

  gameInfoSubject = new Subject<GameInfo>();
  playerTurnSubject = new Subject<string>();
  assignPieceSubject = new Subject<string>();

  board : TicTacToeBoard | ConnectFourBoard = null;
  pc : ComputerPlayer;

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
    this.board.clearBoard();
    delete this.board;
    delete this.pc;
    this.turn = "";
  }

  startGame(canvas : HTMLCanvasElement) {

    const ginfo = this.gameInfo;

    this.assignedPiece = Math.floor(Math.random()*1) === 0 ? "o" : "x";
    
    if (ginfo.opponentPC) {
      
      this.pc = new ComputerPlayer(this.assignedPiece,false,"easy",this);
      this.assignPieceSubject.next(this.assignedPiece === "x" ? "o" : "x");
    }

    if (ginfo.gameType === "TTT") {
      this.board = new TicTacToeBoard(canvas);
    } else if (ginfo.gameType === "CF") {
      this.board = new ConnectFourBoard(canvas);
    }

    this.playerTurnSubject.next(Math.floor(Math.random()*1) === 0 ? "o" : "x");
  }

  confirmMove(move : number[], piece: string) {
    this.board.placePiece(move,piece,true)
    this.board.drawBoardAndPieces();
    this.nextTurn();
  }

  notFinalMove(move : number[], piece: string) {
    this.board.placePiece(move,piece,false)
    this.board.drawBoardAndPieces();
  }

  removePiece(move: number[]) {
    this.board.removePiece(move);
    this.board.drawBoardAndPieces();
  }

  nextTurn() {
    this.playerTurnSubject.next(this.turn === "x" ? "o" : "x");
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
