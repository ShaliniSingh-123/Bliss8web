import { Component, OnInit } from '@angular/core';
import { BlogNewsService } from 'src/app/services/blog-news/blog-news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {
  allProperties: any;
  photoUrl = environment.agentProfileHost;
  allcategories: any;
  dateFormat = "mediumDate";
  constructor(private blognews: BlogNewsService) {

  }
  ngOnInit(): void {
    const dataToApi = { "filters": [], "sorts": [{ "key": "createdOn", "direction": "DESC" }], page: "1", size: "6" };
    this.blognews.blogNews(dataToApi).subscribe((list: any) => {
      this.allProperties = list.content;
    });
    this.blognews.categories().subscribe((list: any) => {
      this.allcategories = list;
    });
  }
}
