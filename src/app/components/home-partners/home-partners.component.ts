import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-partners',
  templateUrl: './home-partners.component.html',
  styleUrls: ['./home-partners.component.scss']
})
export class HomePartnersComponent implements OnInit {
  s3BucketHost=environment.agentProfileHost
  api: any;
  @Input() partners: any;
  testValue : string = 'test'

  config = {
    // slidesPerView: 4,
    autoplay: true,
    spaceBetween: 25,
    pagination: false,
    loop: true,
    slidesPerView: 7,
   
  }
  constructor(private homeService:HomeService) { 

  }

  ngOnInit(): void {
    this.homeService.getActivePartner().subscribe({
      next: (res: any) => {
        this.partners = res;
        console.log(this.partners)
        
      },
      error: (err: any) => {
        
      },
    });
      

  }

}
