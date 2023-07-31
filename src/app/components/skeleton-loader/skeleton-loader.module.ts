import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { SkeletonLoaderComponent } from './skeleton-loader.component';
import { CardResultModule } from '../card-result/card-result.module';
@NgModule({
  declarations: [SkeletonLoaderComponent],
  imports: [
    CommonModule,
    CardResultModule
    ],
  exports :[SkeletonLoaderComponent]
})
export class SkeletonLoaderModule {}
