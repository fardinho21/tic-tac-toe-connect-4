import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { GameManagerService } from '../shared/game-manager.service';
import { BackendService } from "../shared/backend.service";

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent implements OnInit {

  constructor(private router: Router, private gameManager: GameManagerService, private backendService : BackendService) { }

  ngOnInit(): void {
  }

  onOkay(form : NgForm) {
    this.gameManager.playerName = form.value.username;
    //this.backendService.logIn(form.value.username);
    this.router.navigate(['/lobby'])
  }

}
