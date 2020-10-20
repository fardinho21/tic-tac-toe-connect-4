import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Router } from "@angular/router";
import { TicTacToeBoard } from './board/ttt-board';
import { ConnectFourBoard } from './board/cf-board';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  backendSubject = new Subject<BackendResponse>();
  token : string;
  username : string;
  userId: string;
  private BASE_URL : string = "http://localhost:3000/api/";
  constructor(private http : HttpClient) { }

  getBackEndSubject() : Observable<BackendResponse> {
    return this.backendSubject.asObservable();
  }

  logIn(username : string) {

    this.http.post<BackendResponse>(
      this.BASE_URL + "user/login",
      {username : username}
    ).subscribe(response => {
      if (response.status === 201) {
        this.token = response.token;
        this.username = response.username
        this.userId = response.userId
        this.backendSubject.next(response)
      } else if (response.status === 304) {
        console.log("username is already in use")
      }

    })
    
  }

  logOut() {
    this.http.post<BackendResponse>(
      this.BASE_URL + "user/logout/" + this.username + "/" + this.token,
      {username: this.username, token: this.token}
    ).subscribe(response => {
      if (response.status === 200) {
        this.token = null;
        this.username = null;
        this.backendSubject.next(response)
      }

    })
  }

  hostGame(gInfo : GameInfo) {

    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/hostGame",
      {
        hostName: gInfo.hostName,
        hostId: this.userId,
        gameName: gInfo.gameName,
        gameType: gInfo.gameType,
      }
    ).subscribe(response => {
      this.backendSubject.next(response)
    })
  }

  joinGame(gInfo : GameInfo, clientName: string) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/joinGame",
      {
        hostName: gInfo.hostName,
        hostId: gInfo.userId,
        gameName: gInfo.gameName,
        gameType: gInfo.gameType,
        clientName: clientName
      }).subscribe(response => {
        this.backendSubject.next(response)
      })
  }

  cancelWaiting(gInfo: GameInfo, isHost: boolean) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/cancelWaiting",
      {
        hostName: gInfo.hostName, 
        hostId: gInfo.userId, 
        gameName: gInfo.gameName,
        isHost: isHost
      })
      .subscribe(response => {
        this.backendSubject.next(response)
      })
  }

  confirmClient(gInfo : GameInfo, hostId: string) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/hostGame/hostConfirm",
      {
        hostName: gInfo.hostName, 
        hostId: hostId, 
        gameName: gInfo.gameName,
      })
      .subscribe(response => {
        console.log(response)
        this.backendSubject.next(response)
      }) 
  }

  denyClient(gInfo: GameInfo, hostId: string) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/hostGame/hostDeny",
      {
        hostName: gInfo.hostName, 
        hostId: hostId, 
        gameName: gInfo.gameName,
      })
      .subscribe(response => {
        this.backendSubject.next(response);
      })
  }

  check(gInfo : GameInfo, hostId: string, isHost: boolean) {

    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/check",
      {
        hostName: gInfo.hostName,
        hostId: hostId,
        gameName: gInfo.gameName,
        isHost: isHost
      }
    ).subscribe(response => {
      this.backendSubject.next(response)
    })
  }

  checkGameState(gInfo: GameInfo, isHost: boolean) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "gameplay/check",
      {
        gameMode: gInfo.gameType,
        hostName: gInfo.hostName,
        clientName: gInfo.opponentName,
        isHost: isHost
      }).subscribe(response => {
        this.backendSubject.next(response)
      }) 
  }

  confirmMove(gInfo: GameInfo, isHost: boolean, move: number[]) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "gameplay/confirmMove",
      {
        gameMode: gInfo.gameType,
        hostName: gInfo.hostName,
        clientName: gInfo.opponentName,
        isHost: isHost,
        move: move
      }).subscribe(response => {
        this.backendSubject.next(response);
      })
  }

  declareWinner(gInfo: GameInfo, check : string, isHost: boolean) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "gameplay/declareWinner",
      {
        gameMode: gInfo.gameType,
        hostName: gInfo.hostName,
        clientName: gInfo.opponentName,
        isHost: isHost,
        check: check
      }).subscribe(response => {
        this.backendSubject.next(response)
      })

  }

  startGame(gInfo: GameInfo, board: TicTacToeBoard | ConnectFourBoard) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "gameplay/startGame",
      {
        gameMode: gInfo.gameType,
        hostName: gInfo.hostName,
        clientName: gInfo.opponentName,
        board: board.boardArray
      }).subscribe(response => {
        this.backendSubject.next(response)
      })
  }

  fetchGameList() {
    this.http.get<BackendResponse>(
      this.BASE_URL + "lobby/fetchGameList",
    ).subscribe(response => {
      this.backendSubject.next(response)
    })
  }

  deleteGame(gInfo:GameInfo){
    this.http.post<BackendResponse>(
      this.BASE_URL + "lobby/deleteGame",
      {
        hostName: gInfo.hostName,
        hostId: gInfo.userId,
        gameType: gInfo.gameType
      }
    ).subscribe(response => {
      this.backendSubject.next(response)
    })
  }

  deleteGameState(gameState : GameState) {
    this.http.post<BackendResponse>(
      this.BASE_URL + "gameplay/deleteGameState",
        {
          gameMode: gameState.gameMode,
          hostName: gameState.hostName,
          clientName: gameState.clientName
        }
      ).subscribe(response => {
        this.backendSubject.next(response)
      })
  }

}
