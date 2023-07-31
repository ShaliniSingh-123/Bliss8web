import { NgModule } from '@angular/core';
import { ButtonBoxyComponent } from './button-boxy.component';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';


@NgModule({
  declarations: [ButtonBoxyComponent],
  imports: [
    CommonModule

  ],
  exports :[
    ButtonBoxyComponent]
})
export class ButtonBoxyModule { }
