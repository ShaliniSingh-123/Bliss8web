import { Component, OnInit } from '@angular/core';


@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


   list = [
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      },
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      },
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      },
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      },
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      },
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      },
      {
         img: '/assets/images/blog-news.png',
         title: '5 bhk luxury Villa',
         location: 'Dubai Marina',
         price: ' 20,000,0000',
         time: '10 days ago'
      }
   ]
   constructor() { }

   ngOnInit(): void {
   }

}
