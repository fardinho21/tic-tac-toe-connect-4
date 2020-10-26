import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { GameManagerService } from '../shared/game-manager.service';
import { ManagerService } from "../shared/manager.service";
import { BackendService } from "../shared/backend.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent implements OnInit, OnDestroy {

  backendSubscription : Subscription;

  constructor(
    private router: Router, 
    private gameManager: GameManagerService, 
    private backendService : BackendService) { }

  ngOnInit(): void {
    this.backendSubscription = this.backendService.backendSubject.subscribe(brResponse  => {
      if (brResponse.extra === "accessGranted") {
        console.log(brResponse);
        this.router.navigate(['/lobby'])
      }
    })
  }

  ngOnDestroy() {
    this.backendSubscription.unsubscribe();
  }

  onOkay(form : NgForm) {
    this.gameManager.playerName = form.value.username;
    this.backendService.logIn(form.value.username);
    
  }

}
