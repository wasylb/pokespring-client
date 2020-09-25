import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pokespring/home/home.component";
import { LoginComponent } from './pokespring/login/login.component';
import {PokedexComponent} from "./pokespring/pokedex/pokedex.component";
import { RegisterComponent } from './pokespring/register/register.component';
import { AuthService } from './core/http/auth.service';
import { NotAuthorizedComponent } from './pokespring/not-authorized/not-authorized.component';


const routes: Routes = [
  {path: 'home', canActivate: [AuthService], component: HomeComponent},
  {path: 'pokedex', canActivate: [AuthService], component: PokedexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notauthorized', component: NotAuthorizedComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
