import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  propertySearch(location:string){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.route.navigateByUrl('/property-search?community='+location)
  }
  
}
