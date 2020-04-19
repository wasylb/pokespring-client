import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PokespringModule { }
