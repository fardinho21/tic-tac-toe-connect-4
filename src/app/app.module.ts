// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from "./routing.module";
import { MaterialModule } from "./material.module";
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { LobbyComponent } from "./lobby/lobby.component";
import { HostGameComponent } from "./lobby/host-game/host-game.component";
import { JoinGameComponent } from "./lobby/join-game/join-game.component";
import { QuitGameComponent } from "./game/quit-game/quit-game.component";
import { NotValidComponent } from "./game/not-valid/not-valid.component";
import { AgainstPcComponent } from "./lobby/against-pc/against-pc.component";
import { WaitingComponent } from "./lobby/waiting/waiting.component"
import { LoadingComponent } from "./shared/loading/loading.component";
import { ConfirmMoveComponent } from "./game/confirm-move/confirm-move.component";
import { GameComponent } from "./game/game.component";


declare global {
  export interface GameInfo {
    hostName: string;
    gameType: string;
    gameName: string;
    opponentPC: boolean;
    opponentName?: string;
    host?: boolean;
    difficulty? : string;
  }
  export interface BoardPiece {
    index: number[];
    set : boolean;
    piece: string;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    LobbyComponent,
    GameComponent,
    HostGameComponent,
    JoinGameComponent, 
    QuitGameComponent,
    ConfirmMoveComponent,
    AgainstPcComponent,
    LoadingComponent,
    WaitingComponent,
    
    NotValidComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HostGameComponent, 
    JoinGameComponent, 
    QuitGameComponent, 
    AgainstPcComponent,
    WaitingComponent,
    NotValidComponent,
    ConfirmMoveComponent
  ]
})
export class AppModule { }
