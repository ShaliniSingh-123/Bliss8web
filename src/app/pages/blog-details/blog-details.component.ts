import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogNewsService } from 'src/app/services/blog-news/blog-news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})

export class BlogDetailsComponent implements OnInit {
  photoUrl = environment.agentProfileHost;
  propertydetail: any;
  dateFormat = "longDate";
  constructor(private route: ActivatedRoute, private router: Router, private blognews: BlogNewsService) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: any) => {
        console.log('id', params)
        if (params.id) {
          this.blognews.blogDetails(params.id).subscribe({
            next: (res: any) => {
              console.log("res", res)
              this.propertydetail = res;
            },
            error: (err: any) => {
            },
          }
          )
        }
      })
  }
}