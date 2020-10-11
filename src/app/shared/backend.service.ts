import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Router } from "@angular/router";


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

  cancelWaiting() {
    
  }

  confirmClient(gInfo : GameInfo, hostId: string) {
    this.http.put<BackendResponse>(
      this.BASE_URL + "lobby/hostGame/hostConfirm",
      {
        filter: {host: gInfo.hostName, hostId: hostId, gameName: gInfo.gameName},
        update: {
          host: gInfo.hostName, 
          hostId: hostId, 
          gameName: gInfo.gameName,
          gameType: gInfo.gameType,
          hostConfirm: 1,
          clientWaiting: true
        }
      })
      .subscribe(response => {
        console.log(response)
        this.backendSubject.next(response)
      }) 
  }

  check(gInfo : GameInfo, hostId: string, isHost: boolean) {

    this.http.get<BackendResponse>(
      this.BASE_URL + `lobby/check/${gInfo.hostName}/${hostId}/${gInfo.gameType}/${isHost.valueOf()}`
    ).subscribe(response => {
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

}
