import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPropertiesComponent } from './latest-properties.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    LatestPropertiesComponent
  ],
  exports:[
    LatestPropertiesComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    
  ],
  
})
export class LatestPropertiesModule { }
