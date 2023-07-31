import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ImageViewerComponent ],
  imports: [
    CommonModule,
    SwiperModule

  ],exports :[
    ImageViewerComponent

  ]
})
export class ImageViewerModule { }
