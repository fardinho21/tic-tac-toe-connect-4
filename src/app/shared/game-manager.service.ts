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
  private computerPiece : string ;

  gameInfoSubject = new Subject<GameInfo>();
  playerTurnSubject = new Subject<string>();
  computerPieceSubject = new Subject<string>();
  gameEndSubject = new Subject<string>();

  board : TicTacToeBoard | ConnectFourBoard = null;
  pc : ComputerPlayer;

  playerName : string ;
  turn : string;
  gameEnd : boolean = false;

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
    this.board.emptyBoard();
    delete this.board;
    delete this.pc;
    this.turn = "";
  }

  startGame(canvas : HTMLCanvasElement) {

    const ginfo = this.gameInfo;

    this.computerPiece = Math.floor(Math.random()*2) === 0 ? "o" : "x";
    
    if (ginfo.opponentPC) {
      this.pc = new ComputerPlayer(this.computerPiece,false,ginfo.difficulty,this);
      this.computerPieceSubject.next(this.computerPiece === "x" ? "o" : "x");
    }

    if (ginfo.gameType === "TTT") {
      this.board = new TicTacToeBoard(canvas);
    } else if (ginfo.gameType === "CF") {
      this.board = new ConnectFourBoard(canvas);
    }
    
    this.turn = Math.floor(Math.random()*2) === 0 ? "o" : "x"
    this.playerTurnSubject.next(this.turn);
  }

  confirmMove(move : number[], piece: string) {
    this.board.placePiece(move,piece,true);
    let check = this.board.checkForWinner();
    let movesLeft = this.board.unsetAndEmptySpots;
    if (check != "") {
      this.gameEnd = true;
      this.board.drawBoardAndPieces();
      this.gameEndSubject.next(check)

    }
    else if (!movesLeft) {
      this.gameEnd = true;
      this.board.drawBoardAndPieces();
      this.gameEndSubject.next("draw")
    } else {
      this.board.drawBoardAndPieces();
      this.nextTurn();
    }

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
