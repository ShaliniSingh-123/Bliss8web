import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmSideboardComponent } from './adm-sideboard.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AdmSideboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AdmSideboardComponent
  ]
})
export class AdmSideboardModule { }
