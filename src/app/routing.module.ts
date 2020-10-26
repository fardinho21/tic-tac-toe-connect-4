import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LobbyComponent } from './lobby/lobby.component';
import { TitleScreenComponent } from "./title-screen/title-screen.component";
import { GameComponent } from "./game/game.component";

const routes : Routes = [
    {path: "", redirectTo: "title", pathMatch: 'full'},
    {path: "title", component: TitleScreenComponent},
    {path: "lobby", component: LobbyComponent},
    {path: "game", component: GameComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {

}