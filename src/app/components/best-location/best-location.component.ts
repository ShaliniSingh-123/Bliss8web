import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-best-location',
  templateUrl: './best-location.component.html',
  styleUrls: ['./best-location.component.scss']
})
export class BestLocationComponent implements OnInit {
  s3BucketHost=environment.agentProfileHost
  popLocations: any;
  dataLoading: boolean = true;
  constructor(private homeService:HomeService) {

   }
 
  ngOnInit(): void {
    this.homeService.getPopLocations().subscribe({next: (res: any) => {
      this.popLocations = res;
      console.log(this.popLocations)
      this.dataLoading=false
      },
    error: (err: any) => {
      
    },});
  }

}
