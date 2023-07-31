import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchComponent } from './advance-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

// import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatChipsModule} from '@angular/material/chips';

import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { AdvanceSearchPopupModule } from "src/app/components/advance-search-popup/advance-search-popup.module";

@NgModule({
  declarations: [AdvanceSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    CdkAccordionModule,
    AdvanceSearchPopupModule
    ],
  exports :[AdvanceSearchComponent]
})
export class AdvanceSearchModule { 


  ngOnInit() {

  }


}
