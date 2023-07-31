import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyMangementComponent } from './property-mangement.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PropertyMangementComponent],
  exports:[PropertyMangementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PropertyMangementModule { }
