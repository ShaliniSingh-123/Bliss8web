import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeService } from 'src/app/services/home/home.service';
import { DatePipe } from '@angular/common'
import { BlogNewsService } from 'src/app/services/blog-news/blog-news.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  s3BucketHost = environment.agentProfileHost

  config = {
    // slidesPerView: 4,
    autoplay: true,
    spaceBetween: 25,
    pagination: false,
    loop: true,
    slidesPerView: 7,

  }

  blog: any;

  dateFormat = "longDate"

  constructor(private blogService: BlogNewsService) { }

  ngOnInit(): void {
    var request = { "filters": [], "sorts": [{ "key": "createdOn", "direction": "DESC" }], page: "0", size: "4" };
    this.blogService.blogNews(request).subscribe({
      next: (res: any) => {
        this.blog = res.content;
        // console.log("blog",res)
      },
      error: (err: any) => {
      },
    });

  }

}
