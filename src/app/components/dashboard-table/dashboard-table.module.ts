import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './dashboard-table.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [DashboardTableComponent],
  exports:[DashboardTableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class DashboardTableModule { }
