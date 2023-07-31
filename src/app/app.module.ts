import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule, rountingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderModule } from './components/main-header/main-header.module';
import {MatGridListModule} from '@angular/material/grid-list';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyDetailsModule } from './pages/property-details/property-details.module';
import { SwiperModule } from "swiper/angular";
import { RelatedPropertiesModule } from './pages/related-properties/related-properties.module';
import { LatestPropertiesModule } from './components/latest-properties/latest-properties.module';
import { ToastrModule } from 'ngx-toastr';
import { PropertyMangementModule } from './pages/property-mangement/property-mangement.module';
import { TermsAndConditionsModule } from './pages/terms-and-conditions/terms-and-conditions.module';
import { PolicyAndPrivacyModule } from './pages/policy-and-privacy/policy-and-privacy.module';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MainFooterModule } from './components/main-footer/main-footer.module';
import { PropertyVideoComponent } from './components/modals/property-video/property-video.component';
import { RentVsBuyModule } from './pages/rent-vs-buy/rent-vs-buy.module';
import { HomeModule } from './pages/home/home.module';
import { OurAgentsModule } from './pages/our-agents/our-agents.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentProfileDetailsModule } from './pages/agent-profile-details/agent-profile-details.module';
import { PropertyMapViewModule } from './pages/property-map-view/property-map-view.module';
import { BlogNewsModule } from './pages/blog-news/blog-news.module';
import { PropertySearchModule } from './pages/property-search/property-search.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BlogCategoriesModule } from './components/blog-categories/blog-categories.module';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { MortgageCalculatorModule } from './pages/mortgage-calculator/mortgage-calculator.module';
import { TabsComponent } from './pages/admin/tabs/tabs.component';
import { TabsModule } from './pages/admin/tabs/tabs.module';

import { MainAdmModule } from './pages/admin/main-adm/main-adm.module';
import { AdmUserManagmentModule } from './pages/admin/adm-user-managment/adm-user-managment.module';
import { MyPropertiesModule } from './pages/my-properties/my-properties.module';

@NgModule({
  declarations: [
    AppComponent,
    rountingComponent,
    PropertyVideoComponent,
    BlogDetailsComponent,
    
   ],
  entryComponents:[PropertyVideoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PropertyDetailsModule,
    SwiperModule,
    RelatedPropertiesModule,
    LatestPropertiesModule,
    PropertyMapViewModule,
    OurAgentsModule,
    BlogCategoriesModule,
    BlogNewsModule,
    PropertyMangementModule,
    MortgageCalculatorModule,
    TermsAndConditionsModule,
    PolicyAndPrivacyModule,
    MainFooterModule,
    MatGridListModule,
    // NgxSliderModule,
    AgentProfileDetailsModule,
    RentVsBuyModule,
     HomeModule,
     MyPropertiesModule,
    ToastrModule.forRoot(),
    NgbModule,
    PropertySearchModule,
    MainAdmModule,
    MatAutocompleteModule,
    TabsModule,
    MatAutocompleteModule,
    AdmUserManagmentModule,
    MainHeaderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
