import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyAndPrivacyComponent } from './policy-and-privacy.component';



@NgModule({
  declarations: [PolicyAndPrivacyComponent],
  exports:[PolicyAndPrivacyComponent],
  imports: [
    CommonModule
  ]
})
export class PolicyAndPrivacyModule { }
