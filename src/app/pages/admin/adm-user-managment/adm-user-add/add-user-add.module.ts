import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmUserAddComponent } from './adm-user-add.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [AdmUserAddComponent],
  exports:[AdmUserAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class AddUserAddModule { }
