import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatGridList} from '@angular/material/grid-list';

@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.scss']
})
export class WhyChooseComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  movePageproperty() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.route.navigate(['./property-mangement'])
  }
  movePageouragent() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.route.navigate(['./our-agents'])

  }
  movePagemortage() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.route.navigate(['./mortgage-calculator'])

  }
}
