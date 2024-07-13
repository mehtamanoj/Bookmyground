import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButtonModule
  ],
  exports: [
    MatDialogModule,
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButtonModule
  ]
})
export class MaterialModule { }
