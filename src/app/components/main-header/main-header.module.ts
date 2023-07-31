import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent],

  imports: [
    CommonModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    RouterModule
 ],
  exports : [MainHeaderComponent]
})
export class MainHeaderModule { }
