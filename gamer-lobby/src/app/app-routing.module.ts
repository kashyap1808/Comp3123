import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerRankingComponent } from './components/player-ranking/player-ranking.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'player-ranking'},
  { path: 'player-ranking', component: PlayerRankingComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'join-game', component: JoinGameComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'list-games', component: ListGamesComponent },
  { path: 'player-list', component: PlayerListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
