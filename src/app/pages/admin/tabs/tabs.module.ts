import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [TabsComponent],
  exports:[TabsComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class TabsModule { }
