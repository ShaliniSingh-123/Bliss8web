import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import {HomeService} from 'src/app/services/home/home.service'

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class AgentsComponent implements OnInit {

  s3BucketHost=environment.agentProfileHost
  api: any;
  agent: any;
  
  config = {
    // slidesPerView: 4,
    autoplay: true,
    spaceBetween: 25,
    pagination: false,
    loop: true,
    slidesPerView: 7,
  }
  
 
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {

    this.homeService.getActiveAgent().subscribe({
      next: (res: any) => {
        this.agent = res;
        console.log(this.agent)
        
      },
      error: (err: any) => {
        
      },
      
    });

  }
  configagent ={
    slidesPerView: 1,
    spaceBetween: 42,


    // pagination: true,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 0,
        spaceBetween: 53,


      }
    }
  }

}
