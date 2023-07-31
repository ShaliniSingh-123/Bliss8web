import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailsComponent } from './property-details.component';
// import {MatDialogModule} from '@angular/material/dialog';

import { RelatedPropertiesModule } from '../related-properties/related-properties.module';
import { LatestPropertiesModule } from 'src/app/components/latest-properties/latest-properties.module';
import { SafePipeModule } from 'src/app/pipes/safePipe/safe.pipe.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageViewerModule } from 'src/app/components/modals/image-viewer/image-viewer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { propertiesSlideModule } from 'src/app/components/properties-slide/properties-slide.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
 @NgModule({
  declarations: [PropertyDetailsComponent],
  exports:[PropertyDetailsComponent],

  schemas: [
   CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    // MatDialogModule,
    RelatedPropertiesModule,
    LatestPropertiesModule,
    SafePipeModule,
    MatDialogModule,
    ImageViewerModule,
    FormsModule,
    ReactiveFormsModule,
    propertiesSlideModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class PropertyDetailsModule { }
