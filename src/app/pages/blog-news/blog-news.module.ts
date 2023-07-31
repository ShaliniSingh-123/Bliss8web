import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogNewsComponent } from './blog-news.component';
import { BlogCategoriesModule } from 'src/app/components/blog-categories/blog-categories.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [BlogNewsComponent],
  exports: [BlogNewsComponent],
  imports: [
    CommonModule,
    BlogCategoriesModule,
    NgxPaginationModule


  ]
})
export class BlogNewsModule { }
