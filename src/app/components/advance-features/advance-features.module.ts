import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { AdvanceFeaturesComponent } from './advance-features.component';


@NgModule({
  declarations: [AdvanceFeaturesComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ], exports: [
    AdvanceFeaturesComponent
  ]
})
export class AdvanceFeaturesModule { }
