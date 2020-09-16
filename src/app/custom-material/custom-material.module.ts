import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomMaterialModule { }
