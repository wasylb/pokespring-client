import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pokespring/home/home.component";
import { LoginComponent } from './pokespring/login/login.component';
import {PokedexComponent} from "./pokespring/pokedex/pokedex.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
