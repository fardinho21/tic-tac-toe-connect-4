import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http : HttpClient) { }

  logIn(username : string) {
    this.http.post<{message:string}>(
      "http://localhost:3000/api/login",
      {username : username}
    ).subscribe(response => {
      console.log(response.message)
    })
  }
}
