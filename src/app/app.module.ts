// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from "./routing.module";
import { MaterialModule } from "./material.module";

//components
import { AppComponent } from './app.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { LobbyComponent } from "./lobby/lobby.component";


declare global {
  export interface GameInfo {
    playerName: string;
    gameType: string;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
