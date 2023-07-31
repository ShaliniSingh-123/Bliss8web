import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurAgentsComponent } from './our-agents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgentDetailsCardModule } from 'src/app/components/agent-details-card/agent-details-card.module';


@NgModule({
  declarations: [ OurAgentsComponent ],
  exports:[OurAgentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AgentDetailsCardModule
  ]
})
export class OurAgentsModule { }
