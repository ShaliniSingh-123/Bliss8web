import { Component, OnInit } from '@angular/core';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {


  constructor() {}
  config = {
    spaceBetween: 30,
    // pagination: true,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 3,

      },
      767: {
        slidesPerView: 2,

      },
      576:{
        slidesPerView: 1,

      },
      1200:{
        slidesPerView: 3,

      }
  }
  }
  ngOnInit(): void {
   
  }
}
