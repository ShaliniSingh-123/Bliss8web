import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCategoriesComponent } from './blog-categories.component';



@NgModule({
  declarations: [BlogCategoriesComponent],
  exports:[BlogCategoriesComponent],
  imports: [
    CommonModule
  ]
})
export class BlogCategoriesModule { }
