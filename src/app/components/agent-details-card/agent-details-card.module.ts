import { NgModule } from '@angular/core';
import { AgentDetailsCardComponent } from './agent-details-card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AgentDetailsCardComponent],
  imports: [
    CommonModule
  ],
  exports :[
    AgentDetailsCardComponent]
})
export class AgentDetailsCardModule { }
