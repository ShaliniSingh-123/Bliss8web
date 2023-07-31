import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { PropertyMapViewComponent } from './property-map-view.component';



@NgModule({
  declarations: [ PropertyMapViewComponent],
  exports:[PropertyMapViewComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule
  ]
})
export class PropertyMapViewModule { }
