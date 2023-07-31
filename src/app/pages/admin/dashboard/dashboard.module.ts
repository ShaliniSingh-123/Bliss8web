import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardTableModule } from 'src/app/components/dashboard-table/dashboard-table.module';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [DashboardComponent],
  exports:[DashboardComponent],
  imports: [
    CommonModule,
    DashboardTableModule,
    MatCardModule,
    MatTableModule
  ]
})
export class DashboardModule { }
