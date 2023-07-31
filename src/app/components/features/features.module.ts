import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports : [
    FeaturesComponent
  ]
})
export class FeaturesModule { }
