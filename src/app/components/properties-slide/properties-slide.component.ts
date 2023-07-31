import {  Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PropertySearchService } from 'src/app/services/property-search/property-search.service';
import { QueryBuilderhelper } from 'src/app/helper/querybuilder';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SwiperComponent } from 'swiper/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-properties-slide',
  templateUrl: './properties-slide.component.html',
  styleUrls: ['./properties-slide.component.scss']
})
export class PropertiesSlideComponent implements OnInit,OnChanges  {
  @ViewChild('gallery', { static: false }) gallery: SwiperComponent | undefined;
  @Input() NumOfProperties: any = 100;
  @Input() query: any = {};
  @Input() maxsliderPerView: any = 1;
  @Input() removeProperty: any = 0;
  @Input() endCardMessage: any = 'View All Properties';
   dataloading = true
  propertydetails: any = []
  config2 = {
  }
  dataToApi: any = {
    "filters": [],
    "sorts": [
      {
        "key": "createdOn",
        "direction": "ASC"
      }
    ],
  };
  queryBuilderhelper = new QueryBuilderhelper()
  queryd:any = ''
  paramsdata = {}
  constructor(private propertysearch: PropertySearchService,
    private route: Router,
    public activatedRoute: ActivatedRoute
  ) {
  }
  ngOnChanges(changes: any): void {
    console.log('ngOnChanges' ,this.maxsliderPerView,' q=',this.query,changes)
    if(changes.query){
      this.paramBuilder()
    }
   }
  ngOnInit(): void {
    console.log('ngOnInit',this.maxsliderPerView,' q=',this.query)

    // this.paramBuilder()
    console.log('maxsliderPerView = > ', this.maxsliderPerView)
    this.config2 = {
      slidesPerView:  this.maxsliderPerView ,
      a11y: { enabled: true },
      spaceBetween: 0,
      loop: false,
      //  keyboard: true,
    }
  }
  paramBuilder() {

    console.log('from parent comp', this.query)
    this.queryd = this.queryBuilderhelper.responsebuilder(this.query)
this.queryd.size=this.NumOfProperties+2;
console.log('queryd',this.queryd)
    this.propertysearch.propertySearch(this.queryd).subscribe((list: any) => {
      console.log("Properties", list)
      for (let i = 0; i < list.content.length; i++) {
         if (i < this.NumOfProperties) {
          if (list.content[i].id != this.removeProperty) {
            this.propertydetails.push(list.content[i]);
          } else {

            //this.NumOfProperties = this.NumOfProperties + 1;
          }
         }else{break;}
      }


      if(this.propertydetails.length < this.maxsliderPerView){
        this.query={}
        console.log('Query returns less results')
        this.queryd = this.queryBuilderhelper.responsebuilder(this.query)
        this.propertydetails=[]
        this.propertysearch.propertySearch(this.queryd).subscribe((list: any) => {
           for (let i = 0; i < list.content.length; i++) {
             if (i < this.NumOfProperties) {
              console.log('this.NumOfProperties ' ,i,' - ',this.NumOfProperties)
              if (list.content[i].id != this.removeProperty) {
                this.propertydetails.push(list.content[i]);
              } else {
              //  this.NumOfProperties = this.NumOfProperties + 1;
              }
            }else{break;}
          }})
       }
      this.dataloading = false

    },(error:any)=>{
      this.dataloading = false
    })



  }

  redirectpage(id: any) {
    this.route.navigateByUrl("/property-details?propertyid=" + id)
  }
  nextslide() {
    this.gallery?.swiperRef.slideNext();
  }
  prevslide() {
    this.gallery?.swiperRef.slidePrev();
  }
  getCurrentSlide() {
    return this.gallery?.swiperRef.activeIndex.toString()
  }
  redirecttoAllproperties() {
    let paramsforURL = this.queryBuilderhelper.formvaluetoParamsConverter(this.query)
    console.log('redirecttoAllproperties', paramsforURL)
    this.route.navigateByUrl("/property-search" + paramsforURL)

  }
}
