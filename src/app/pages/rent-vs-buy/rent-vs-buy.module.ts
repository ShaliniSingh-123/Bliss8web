import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentVsBuyComponent } from './rent-vs-buy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RentVsBuyComponent
  ],
  exports:[RentVsBuyComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class RentVsBuyModule { }
