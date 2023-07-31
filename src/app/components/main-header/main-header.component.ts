import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../modals/Sign-in-modal/sign-in-modal.component';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  headerLight:any = false;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
  }

  getHeaderClass() {
    if(this.router.url.includes('home')|| this.router.url.includes('contact-us')) {
      this.headerLight = true;
      return this.headerLight;
    }
  }
  openSignin(){
    const dialogRef = this.dialog.open(SignInComponent
      , {
        data: {
      },
        panelClass: 'custom-dialog-sign-up',
        hasBackdrop:true,
        backdropClass: 'backdropBackground-image-view',

      });
  }
}

