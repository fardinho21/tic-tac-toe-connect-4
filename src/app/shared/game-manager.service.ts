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
    gameInfo.playersReady = true;
    if (gameInfo.hostName != this.playerName) {
      gameInfo.opponentName = this.playerName
    }
    this.setGameInfo(gameInfo)
  }

  quitGame() {
    
    this.clearGameInfo();
    this.board.clearBoard();
    this.board.emptyBoard();
    this.pc.quitGame();
    this.gameEnd = false;
    this.board = null;
    this.pc = null;
    this.computerPiece = "";
    this.turn = "";
  }

  startGame(canvas : HTMLCanvasElement) {
    this.gameEnd = false;
    const ginfo = this.gameInfo;

    
    
    if (ginfo.opponentPC) {
      this.pc = new ComputerPlayer(this.computerPiece,false,ginfo.difficulty,this);
      this.computerPiece = Math.floor(Math.random()*2) === 0 ? "o" : "x";
      let playerPiece = this.computerPiece === "x" ? "o" : "x";
      this.computerPieceSubject.next(playerPiece);
      this.turn = Math.floor(Math.random()*2) === 0 ? "o" : "x"
      this.playerTurnSubject.next(this.turn);
    } 

    if (ginfo.gameType === "TTT") {
      this.board = new TicTacToeBoard(canvas);
    } else if (ginfo.gameType === "CF") {
      this.board = new ConnectFourBoard(canvas);
    }
    

  }

  endGame(check : string) {
    this.gameEnd = true;
    this.board.drawBoardAndPieces();
    this.gameEndSubject.next(check)
  }

  confirmMove(move : number[], piece: string) {
    this.board.placePiece(move,piece,true);
    let check = this.board.checkForWinner();
    let movesLeft = this.board.unsetAndEmptySpots;
    if (check != "") {
      this.endGame(check)
    }
    else if (!movesLeft) {
      this.endGame("draw") 
    } 
    else {
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
    this.gameInfo = {gameName: null, gameType: null, opponentPC: null, hostName: null}
    this.gameInfoSubject.next(this.gameInfo);
  }
  
}
