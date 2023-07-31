import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchPopupModule } from 'src/app/components/advance-search-popup/advance-search-popup.module';
import { FeaturesModule } from 'src/app/components/features/features.module';
 import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceSearchPopupComponent } from 'src/app/components/advance-search-popup/advance-search-popup.component';
import { BestLocationComponent } from 'src/app/components/best-location/best-location.component';
import { BlogsComponent } from 'src/app/components/blogs/blogs.component';
import { AgentsComponent } from 'src/app/components/agents/agents.component';
import { WhyChooseComponent } from 'src/app/components/why-choose/why-choose.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HomePartnersComponent } from 'src/app/components/home-partners/home-partners.component';
import { propertiesSlideModule } from 'src/app/components/properties-slide/properties-slide.module';
import { FullSearchModule } from 'src/app/components/full-search/full-search.module';
import { SignInModule } from 'src/app/components/modals/Sign-in-modal/sign-in-modal.module';
@NgModule({
  declarations: [HomeComponent,
    BestLocationComponent,
    BlogsComponent,
    AgentsComponent,
    WhyChooseComponent,
    HomePartnersComponent],

  imports: [
    CommonModule,
    AdvanceSearchPopupModule,
    FeaturesModule,
    NgxSliderModule,
    FormsModule,
    SwiperModule,
    propertiesSlideModule,
    SignInModule,
    FullSearchModule ],
  exports : [HomeComponent]
})
export class HomeModule { }
