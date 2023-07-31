import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { PropertiesSlideComponent } from './properties-slide.component';
 import { CardResultModule } from '../card-result/card-result.module';
 import { SwiperModule } from 'swiper/angular';
import { SkeletonLoaderModule } from '../skeleton-loader/skeleton-loader.module';
@NgModule({
  declarations: [PropertiesSlideComponent],
  imports: [
    CommonModule,
    CardResultModule,
    SwiperModule,
    SkeletonLoaderModule
    ],
  exports :[PropertiesSlideComponent]
})
export class propertiesSlideModule {}
