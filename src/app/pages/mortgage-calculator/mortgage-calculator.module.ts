import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    MortgageCalculatorComponent
  ],
  exports:[
    MortgageCalculatorComponent
  ],
  
  
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    NgxSliderModule
  ]
})
export class MortgageCalculatorModule { }
