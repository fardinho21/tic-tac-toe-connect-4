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
import { AgainstPcComponent } from "./lobby/against-pc/against-pc.component";
import { GameComponent } from "./game/game.component";


declare global {
  export interface GameInfo {
    playerName: string;
    gameType: string;
    gameName: string;
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
    AgainstPcComponent
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
  entryComponents: [HostGameComponent, JoinGameComponent, QuitGameComponent, AgainstPcComponent]
})
export class AppModule { }
