import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwipeCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwipeCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-related-properties',
  templateUrl: './related-properties.component.html',
  styleUrls: ['./related-properties.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RelatedPropertiesComponent implements OnInit {

  constructor() { }
  config = {
    //slidePerview: 4,
    spaceBetween: 30,
    //Pagination: true,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 1,
      }
    }
  }

  ngOnInit(): void {
  }

}
