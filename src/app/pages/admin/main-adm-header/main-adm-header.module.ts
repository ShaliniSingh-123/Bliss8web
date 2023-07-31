import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAdmHeaderComponent } from './main-adm-header.component';



@NgModule({
  declarations: [
    MainAdmHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainAdmHeaderComponent
  ]
})
export class MainAdmHeaderModule { }
