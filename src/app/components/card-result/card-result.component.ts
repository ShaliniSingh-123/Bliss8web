
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Input } from '@angular/core';
import { environment } from 'src/environments/environment';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { propertyFilter } from 'src/app/common/constants';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardResultComponent implements OnInit {
  photoUrl = environment.propertyphoto

  showMe: boolean = false
  items = [] as any;
  ngOnInit() {
    if(localStorage.getItem('wishList key')){
      this.items = localStorage.getItem('wishList key')
    }

  }
  addToWishlist(id: any) {
    this.showMe = !this.showMe
    var data = localStorage.getItem('wishList key')
    if (data) {
      this.items = JSON.parse(data)
      if(!this.items.includes(id)){
        this.items.push(id)
      }
    }
    
    localStorage.setItem("wishList key", JSON.stringify(this.items))

  }
  removeFromWishlist(id: any) {
    this.showMe = !this.showMe
    var data = localStorage.getItem('wishList key')
    if (data) {
      this.items = JSON.parse(data)
      const index=this.items.indexOf(id);
       this.items.splice(index,1)
    }
    localStorage.setItem("wishList key", JSON.stringify(this.items))
  }
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    this.fillColor = `rgb(33,33,33)`;

  }

  @Input()
  id!: any;
  @Input()
  title !: string;
  @Input()
  image !: any;
  @Input()
  location !: string;
  @Input()
  nBeds !: number;
  @Input()
  nBaths !: number;
  @Input()
  nGarage !: number;
  @Input()
  nSqft !: number;
  @Input()
  price !: number;
  @Input()
  link: any = 'property-details';
  @Input()
  cardEmpty: boolean = false;
  x: any;



  config = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: true,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 2,

      },
      576: {
        slidesPerView: 1,

      }
    }
  }


  constructor() {

  }
}


function indexOf(id: any) {
  throw new Error('Function not implemented.');
}

