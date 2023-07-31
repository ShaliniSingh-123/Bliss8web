import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';



@NgModule({
  declarations: [TermsAndConditionsComponent],
  exports:[TermsAndConditionsComponent],
  imports: [
    CommonModule
  ]
})
export class TermsAndConditionsModule { }
