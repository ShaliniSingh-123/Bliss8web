import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedPropertiesComponent } from './related-properties.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    RelatedPropertiesComponent
  ],
  exports:[
    RelatedPropertiesComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    
  ],
  
})
export class RelatedPropertiesModule { }
