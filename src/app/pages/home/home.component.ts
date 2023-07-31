import { Component, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { environment } from 'src/environments/environment';
import { HomeService } from 'src/app/services/home/home.service';


SwiperCore.use([Autoplay, Pagination, Navigation]);
interface IData{
  code: string;
  name:string;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class HomeComponent implements OnInit {
  s3BucketHost=environment.agentProfileHost
  scrHeight:any;
  scrWidth:any;
  relatedPropCardSize=4







  constructor() {

  }
  ngOnInit(): void {
   }

  @HostListener('window:resize', ['$event'])
getScreenSize(event?:any) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrHeight, this.scrWidth);
      this.changeCardSize()
}

  changeCardSize(){
    if(this. scrWidth <= 426){
      this.relatedPropCardSize =1
    }
  else if(this. scrWidth <= 799){
    this.relatedPropCardSize =2

  }
  else if(this. scrWidth <= 1024){
    this.relatedPropCardSize =3

  }
  else{
    this.relatedPropCardSize =4

  }
}
}
