import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullSearchComponent } from './full-search.component';
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
import { SearchBarModule } from "src/app/components/search-bar/search-bar.module";
// import {AdvanceFeaturesModule} from 'src/app/components/advance-features/advance-features.module';
import { AdvanceSearchModule } from "src/app/components/advance-search-collapse/advance-search.module";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [FullSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatChipsModule,
    NgxSliderModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    SearchBarModule
    ],
  exports :[FullSearchComponent]
})
export class FullSearchModule { 


  ngOnInit() {

  }


}
