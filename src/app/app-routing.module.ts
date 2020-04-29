import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pokespring/home/home.component";
import {PokedexComponent} from "./pokespring/pokedex/pokedex.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
