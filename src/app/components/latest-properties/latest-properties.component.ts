import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwipeCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwipeCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-latest-properties',
  templateUrl: './latest-properties.component.html',
  styleUrls: ['./latest-properties.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestPropertiesComponent implements OnInit {

  constructor() { }
  config = {
    //slidePerview: 4,
    spaceBetween: 30,
    //Pagination: true,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      }
    }
  }

  ngOnInit(): void {
  }

}
