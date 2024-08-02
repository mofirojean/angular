import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

/**
 * @title Shared Module for Material UI components and modules
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatInputModule
  ]
})
export class SharedModule { }
