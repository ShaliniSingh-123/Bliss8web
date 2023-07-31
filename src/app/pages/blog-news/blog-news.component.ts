import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogNewsService } from 'src/app/services/blog-news/blog-news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-news',
  templateUrl: './blog-news.component.html',
  styleUrls: ['./blog-news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogNewsComponent implements OnInit {
  page = 1;
  currentpage = 1;
  allProperties: any;
  photoUrl = environment.agentProfileHost;
  dateFormat="longDate"
  constructor(private blognews: BlogNewsService) {

  }
  ngOnInit(): void {
         const dataToApi = { "filters": [], "sorts": [{ "key": "createdOn", "direction": "DESC" }], page: "0", size: "15" };
        this.blognews.blogNews(dataToApi).subscribe((list: any) => {
          this.allProperties = list.content;
        })
  }
  handlePageChange(e: any) {
    console.log(e);
    this.page = e;
    this.currentpage = this.page
  }

}
