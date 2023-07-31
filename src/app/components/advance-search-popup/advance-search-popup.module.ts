import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchPopupComponent } from './advance-search-popup.component';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdvanceSearchPopupComponent],
  imports: [
    CommonModule,
    FormsModule
    // NgxSliderModule
   
  ],
  exports :[AdvanceSearchPopupComponent]
})
export class AdvanceSearchPopupModule { }
