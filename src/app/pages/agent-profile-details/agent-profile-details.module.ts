import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentProfileDetailsComponent } from './agent-profile-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonBoxyModule } from 'src/app/components/buttons/button-boxy/button-boxy.module';
import { propertiesSlideModule } from 'src/app/components/properties-slide/properties-slide.module';

@NgModule({
  declarations: [AgentProfileDetailsComponent,
     ],
  exports:[AgentProfileDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonBoxyModule,
    propertiesSlideModule
  ]
})
export class AgentProfileDetailsModule { }
