import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAdmComponent } from './main-adm.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainAdmHeaderModule } from '../main-adm-header/main-adm-header.module';
import { AdmSideboardModule } from '../adm-sideboard/adm-sideboard.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabsModule } from '../tabs/tabs.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdmLeadManageComponent } from '../adm-lead-managment/sub-pages/adm-lead-manage/adm-lead-manage.component';
import { MatTableModule } from '@angular/material/table'  
import { DashboardModule } from '../dashboard/dashboard.module';
@NgModule({
  declarations: [
    MainAdmComponent,
    AdmLeadManageComponent
   
   
  ],

  imports: [
    CommonModule,
    NgbModule,
    MainAdmHeaderModule,
    AdmSideboardModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    TabsModule,
    MatToolbarModule,
    MatTableModule,
    DashboardModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
   ],
  exports: [MainAdmComponent],
 
})

export class MainAdmModule { }