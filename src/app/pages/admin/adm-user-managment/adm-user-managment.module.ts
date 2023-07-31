import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmUserManagmentComponent } from './adm-user-managment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { AddUserAddModule } from './adm-user-add/add-user-add.module';




@NgModule({
  declarations: [AdmUserManagmentComponent, ],
 exports:[
  AdmUserManagmentComponent
 ],
  imports: [
    CommonModule,
     
     NgbModule ,
     ReactiveFormsModule,
     AddUserAddModule 
    

     
  ],
})
export class AdmUserManagmentModule { }
