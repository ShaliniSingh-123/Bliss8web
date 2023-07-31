import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PropertySearchComponent } from './property-search.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdvanceFeaturesModule } from 'src/app/components/advance-features/advance-features.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CardResultModule } from 'src/app/components/card-result/card-result.module';
import { propertiesSlideModule } from 'src/app/components/properties-slide/properties-slide.module';
import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';
import { SkeletonLoaderModule } from 'src/app/components/skeleton-loader/skeleton-loader.module';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [PropertySearchComponent],
  imports: [
    CommonModule,
    NgxSliderModule,
    NgxSpinnerModule,
    AdvanceFeaturesModule,
    NgxPaginationModule,
    FormsModule,
    CardResultModule,
    propertiesSlideModule,
    SearchBarModule,
    SkeletonLoaderModule,
    MatSelectModule
    
    
   ],
   exports :[
    PropertySearchComponent
  ]
})
export class PropertySearchModule { }
