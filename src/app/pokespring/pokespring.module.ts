import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HomeComponent, PokedexComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PokespringModule { }
