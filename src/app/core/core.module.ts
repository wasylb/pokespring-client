import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    HttpClientModule,
    RouterModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
