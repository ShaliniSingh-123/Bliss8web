import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
 import { HomeComponent } from './pages/home/home.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PolicyAndPrivacyComponent } from './pages/policy-and-privacy/policy-and-privacy.component';
 import { PropertySearchComponent } from './pages/property-search/property-search.component';
import { AgentProfileDetailsComponent } from './pages/agent-profile-details/agent-profile-details.component';
import { OurAgentsComponent } from './pages/our-agents/our-agents.component';
import { RentVsBuyComponent } from './pages/rent-vs-buy/rent-vs-buy.component';
import { PropertyMangementComponent } from './pages/property-mangement/property-mangement.component'
import { PropertyMapViewComponent } from './pages/property-map-view/property-map-view.component'
import { MainAdmComponent } from './pages/admin/main-adm/main-adm.component';
import { BlogNewsComponent } from './pages/blog-news/blog-news.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { MortgageCalculatorComponent } from './pages/mortgage-calculator/mortgage-calculator.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdmLeadManageComponent } from './pages/admin/adm-lead-managment/sub-pages/adm-lead-manage/adm-lead-manage.component';
import { AdmUserAddComponent } from './pages/admin/adm-user-managment/adm-user-add/adm-user-add.component';
import { AdmUserManagmentComponent } from './pages/admin/adm-user-managment/adm-user-managment.component';
import { MyPropertiesModule } from './pages/my-properties/my-properties.module';
import { MyPropertiesComponent } from './pages/my-properties/my-properties.component';

//import { AppComponent } from '.';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    pathMatch: 'full',
    component: ContactUsComponent
  },
  {
    path: 'my-properties',
    pathMatch: 'full',
    component: MyPropertiesComponent
  },
  {
    path:'property-details',
    pathMatch:'full',
    component:PropertyDetailsComponent
  },
  {
    path: 'our-agents',
    pathMatch: 'full',
    component: OurAgentsComponent
  },
  {
    path: 'property-mangement',
    pathMatch: 'full',
    component: PropertyMangementComponent
  },
  {
    path: 'terms-and-conditions',
    pathMatch: 'full',
    component: TermsAndConditionsComponent
  },
  {
    path: 'mortgage-calculator',
    pathMatch: 'full',
    component: MortgageCalculatorComponent
  },
  {
    path: 'privacy-policy',
    pathMatch: 'full',
    component: PolicyAndPrivacyComponent
  },
  {
    path: 'property-search',
    pathMatch: 'full',
    component: PropertySearchComponent
  },
  {
    path: 'agent-profile-details/:id',
    pathMatch: 'full',
    component: AgentProfileDetailsComponent
  },
  {
    path: 'rent-vs-buy',
    pathMatch: 'full',
    component: RentVsBuyComponent
  },
  {
    path: 'property-map-view',
    pathMatch: 'full',
    component: PropertyMapViewComponent
  },
  {
    path: 'main-adm',
    pathMatch: 'full',
    component: MainAdmComponent
  },
{
  path: 'blog-news',
  pathMatch: 'full',
  component: BlogNewsComponent
},
{
  path: 'find-blog',
  pathMatch: 'full',
  component: BlogDetailsComponent
},
{
  path: 'dashboard',
  pathMatch: 'full',
  component: DashboardComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponent = [ContactUsComponent]
