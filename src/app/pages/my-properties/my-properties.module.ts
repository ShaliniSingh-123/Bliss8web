import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPropertiesComponent } from './my-properties.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [MyPropertiesComponent],

  imports: [
    CommonModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule
 ],
  exports : [MyPropertiesComponent]
})
export class MyPropertiesModule { }
