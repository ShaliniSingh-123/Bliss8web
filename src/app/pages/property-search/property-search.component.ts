import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { PropertySearchService } from 'src/app/services/property-search/property-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { propertyFilter } from '../../common/constants'
import { myCRMConstants  } from '../../common/myCRM-constant';
import { QueryBuilderhelper } from 'src/app/helper/querybuilder';
import { SearchDataService } from 'src/app/services/search-data/search-data';
import { ToastrService } from 'ngx-toastr';
import { errorMessages } from 'src/app/common/string_messages';
@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertySearchComponent implements OnInit {
  queryBuilderhelper = new QueryBuilderhelper();
  PropertiesPerApicall:number = 12
  page = 1;
  showpropertySearch:boolean = true
  availableLocations: string[] = [];
  searchedCommunities:string[]=[];
  PreselectedCommunity:any = []
  isSelectedArray: any = [];
  currentpage: any = 1;
  SortdataToAPI:any = [ {"key": "price","direction": "ASC"}]
  dataToApi: any = {
    "filters": [],
    "sorts": [
      {
        "key": "createdOn",
        "direction": "ASC"
      }
    ],
  };
  Area: Options = {
    floor: 10,
    ceil: 50000
  };
  areaMinValue: number = 0;
  areaMaxValue: number = 50000;

  Price: Options = {
    floor: 0,
    ceil: 60000000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span>AED </span>" + value.toLocaleString('en');
        case LabelType.High:
          return "<span>AED </span>" + '+' + value.toLocaleString('en');
        default:
          return '';
      }
    }  
  };
  priceMinValue: number = 100;
  priceMaxValue: number = 60000000;

  allProperties: any = [];
  paramsdata: any;
  visibleValue="hidden"
  photoUrl: string = environment.propertyphoto;
  pType: any;
  numberOfElements: any = 0;
  apihasNoofElement: any = 0;
  totalNoofElements: any = 0;
  toggoleShow: Boolean = false;
  propertySelectType: any;
  propertyofferingType: any;
  propertyBedroom:any;
  propertyParking:any;
  allpropertiesLoading=true
  propertyBathroom:any;
  sortOption1:any ='option1'
  urlPath=""

 //extraAmenties - comma separated String
 extraAmenties:any=''
 pre_selectedAmenties=[]
CRM_CONSTANTS= myCRMConstants




  propertiesPhoto: any;
  constructor(private router: Router,
    public toastrService:ToastrService
    ,private searchService: SearchDataService, private propertysearch: PropertySearchService, private route: ActivatedRoute
  ) {

   }

  handlePageChange(e: any) {
    // this.page = e;
    console.log('handlePageChange',e);

    this.page = e;
    this.currentpage = this.page
    this.CallApi();
   this.scrolltocontent();
  }


  ngOnInit(): void {
    this.getAllLocation();
    this.getParamfromURL();


  }

  getParamfromURL(){
    this.route.queryParams
    .subscribe((params: any) => {
      this.dataToApi  = {"filters": [],"sorts": [{"key": "createdOn","direction": "ASC"}],};
      console.log(params, 'type..');
      this.paramsdata = params;
      if (params.offeringType ) {
        let offeringTypeData = {
          "key": propertyFilter.offeringType.key,
          "operator": propertyFilter.offeringType.operator,
          "field_type": propertyFilter.offeringType.field_type,
          "value": params.offeringType
        }
        this.dataToApi.filters.push(offeringTypeData)
        this.propertyofferingType = params.offeringType
      }
      if (params.community ) {
        var splited = params.community.split(',');
        this.getSelecetedLocations(splited)

        let offeringTypeData = {
          "key": propertyFilter.community.key,
          "operator": propertyFilter.operator.IN,
          "field_type": propertyFilter.community.field_type,
          "values": splited
        }
        this.dataToApi.filters.push(offeringTypeData)
        this.PreselectedCommunity = splited
      }
      if (params.community ) {
        var splited = params.community.split(',');

        let offeringTypeData = {
          "key": propertyFilter.community.key,
          "operator": propertyFilter.operator.IN,
          "field_type": propertyFilter.community.field_type,
          "values": splited
        }
        this.dataToApi.filters.push(offeringTypeData)
      }
      if (params.searchkey  ) {
        let offeringTypeData = {
          "key": propertyFilter.descriptionEn.key,
          "operator": propertyFilter.descriptionEn.operator,
          "field_type": propertyFilter.descriptionEn.field_type,
          "value": params.searchkey
        }
        this.dataToApi.filters.push(offeringTypeData)
      }
      if (params.bedroom  ) {
        let bedroom = {
          "key": propertyFilter.bedroom.key,
          "operator": params.bedroom =='10 ' ? propertyFilter.operator.GREATER   : propertyFilter.bedroom.operator,
          "field_type": propertyFilter.bedroom.field_type,
          "value": params.bedroom =='10 ' ? '10'  : params.bedroom
        }
        this.dataToApi.filters.push(bedroom)
        this.propertyBedroom=  params.bedroom =='10 ' ? '10+'  : params.bedroom
      }
      if (params.bathroom) {
        let bathroom = {
          "key": propertyFilter.bathroom.key,
          "operator":params.bathroom =='10 ' ? propertyFilter.operator.GREATER  : propertyFilter.bathroom.operator,
          "field_type": propertyFilter.bathroom.field_type,
          "value": params.bathroom =='10 ' ? '10'  : params.bathroom
        }

        this.dataToApi.filters.push(bathroom)
        this.propertyBathroom= params.bathroom =='10 ' ? '10+'  : params.bathroom
      }
      if (params.property_type  ) {
        let propertyType = {
          "key": propertyFilter.propertyType.key,
          "operator": propertyFilter.propertyType.operator,
          "field_type": propertyFilter.propertyType.field_type,
          "value": params.property_type
        }
        this.dataToApi.filters.push(propertyType)
        this.propertySelectType=params.property_type
      }
      if (params.sizeMinValue  ) {
        let size = {
          "key": propertyFilter.size.key,
          "operator": propertyFilter.operator.GREATER,
           "field_type": propertyFilter.size.field_type,
          "value": params.sizeMinValue
        }
        this.dataToApi.filters.push(size)
        this.areaMinValue=params.sizeMinValue
      } if (params.sizeMaxValue  ) {
        let size = {
          "key":propertyFilter.size.key,
          "operator": propertyFilter.operator.LESSER,
           "field_type": propertyFilter.size.field_type,
          "value": params.sizeMaxValue
        }
        this.dataToApi.filters.push(size)
        this.areaMaxValue=params.sizeMaxValue
      }
      if (params.priceMinValue  ) {
        let priceMinValue = {
          "key": propertyFilter.price.key,
          "operator": propertyFilter.operator.GREATER,
           "field_type": propertyFilter.price.field_type,
          "value": params.priceMinValue
        }
        this.dataToApi.filters.push(priceMinValue)
        this.priceMinValue=params.priceMinValue
      }
      if (params.priceMaxValue  ) {
        let priceMaxValue = {
          "key": propertyFilter.price.key,
          "operator": propertyFilter.operator.LESSER,
           "field_type": propertyFilter.price.field_type,
          "value": params.priceMaxValue
        }
        this.dataToApi.filters.push(priceMaxValue)
        this.priceMaxValue=params.priceMaxValue
      }if (params.parking  ) {
        let parking = {
          "key":  propertyFilter.parking.key,
          "operator": params.parking =='7 ' ? propertyFilter.operator.GREATER  : propertyFilter.parking.operator,
          "field_type": propertyFilter.parking.field_type,
          "value": params.parking =='7 ' ? '7'  : params.parking
        }
        this.dataToApi.filters.push(parking)
        this.propertyParking=  params.parking =='7 ' ? '7+'  : params.parking
      }if (params.amenities ) {
        var splited = params.amenities.split(',');

        let offeringTypeData = {
          "key":  propertyFilter.community.key,
          "operator": propertyFilter.operator.IN,
          "field_type": propertyFilter.community.field_type,
          "values": splited
        }
        this.dataToApi.filters.push(offeringTypeData)
        this.pre_selectedAmenties = splited
      }if (params.agent  ) {
        let agent = {
          "key":  propertyFilter.agent.key,
          "operator":   propertyFilter.operator.EQUAL  ,
          "field_type": propertyFilter.agent.field_type,
          "value": params.agent
        }
        this.dataToApi.filters.push(agent)
        //this.propertyParking=  params.parking =='7 ' ? '7+'  : params.parking
      }
      this.CallApi();
      console.log('-------------')
      this.urlPath=this.router.url;
      this.urlPath=this.urlPath.substring(this.urlPath.indexOf("?"));




      console.log(this.urlPath)


    }
    );
  this.allpropertiesLoading=true;
  console.log('-------------')
  }
CallApi(){
  this.visibleValue="hidden";

  this.allpropertiesLoading=true;
  this.numberOfElements = 0;
    this.totalNoofElements = 0
    this.allProperties = []
  this.dataToApi.sorts = this.SortdataToAPI;
  this.dataToApi.page = this.currentpage - 1;
  this.dataToApi.size= this.PropertiesPerApicall
  console.log(JSON.stringify(this.dataToApi))
  this.propertysearch.propertySearch(this.dataToApi).subscribe((list: any) => {
   // console.log("alllist", list)
    if(list.content.length == 0){
      this.visibleValue="visible";
    //  this.toastrService.error(errorMessages.dataDoesntExistForUserQuery.body,errorMessages.dataDoesntExistForUserQuery.title)
    }
    this.currentpage = list.number+1
    this.numberOfElements = list.pageable.offset;
    this.apihasNoofElement= list.numberOfElements
    this.totalNoofElements = list.totalElements
    this.page=list.pageable.pageNumber+1
    this.allProperties = list.content
    console.log(this.allProperties)
    this.allpropertiesLoading=false;

   // this.visibleValue="hidden";

//We can’t find your search query. Please check your spelling or try a different location
  },(error:any)=>{
    this.allpropertiesLoading=false;
    this.toastrService.error(errorMessages.commonError.body,errorMessages.commonError.title)
    this.visibleValue="hidden";



  }
  )
}
selectOption(value: any) {
  //getted from event
  //getted from binding
  this.propertyofferingType = value
  console.log(this.propertyofferingType)
}
  toggoleButton() {
    this.toggoleShow = !this.toggoleShow;
  }
  onSubmit(form: any) {
    console.log('submitted formdata', form.value,this.extraAmenties);
    let data= form.value;
    data.amenities=this.extraAmenties.slice(0, -1)
    data.sizeMinValue=this.areaMinValue
    data.sizeMaxValue=this.areaMaxValue
    data.priceMinValue=this.priceMinValue
    data.priceMaxValue=this.priceMaxValue
    data.community=this.searchedCommunities
    data.offeringtype=this.propertyofferingType
    let params = this.queryBuilderhelper.formvaluetoParamsConverter(data)
    //let params=this.formvaluetoParamsConverter(data);
    console.log(params);
    this.router.navigateByUrl('property-search'+params);
  }
  formvaluetoParamsConverter(data:any){
    console.log('formvalueConverter',data)
    let paramString='?'
    if(data.location){
     paramString= paramString + 'location=' + data.location + '&';
    }
    if(data.searchkey){
      paramString= paramString + 'searchkey=' + data.searchkey + '&';
     }
    if(data.offeringtype){
      paramString= paramString + 'offeringType=' + data.offeringtype      + '&';
    }
    if(data.bedroom){
      paramString= paramString + 'bedroom=' + data.bedroom + '&';
    }
    if(data.property_type){
      paramString= paramString + 'property_type=' + data.property_type + '&';
    }
    if(data.sizeMinValue){
      paramString= paramString + 'sizeMinValue=' + data.sizeMinValue + '&';
    }
    if(data.sizeMaxValue){
      paramString= paramString + 'sizeMaxValue=' + data.sizeMaxValue + '&';
    }
    if(data.priceMinValue){
      paramString= paramString + 'priceMinValue=' + data.priceMinValue + '&';
    }if(data.priceMaxValue){
      paramString= paramString + 'priceMaxValue=' + data.priceMaxValue + '&';
    }if(data.bathroom){
      paramString= paramString + 'bathroom=' + data.bathroom + '&';
    }if(data.propertyParking){
      paramString= paramString + 'parking=' + data.propertyParking + '&';
    }
    return paramString.slice(0, -1);
  }
  sliderEvent() {
    console.log("area", this.areaMinValue, this.areaMaxValue)
  }
  Amenties_setter(data:any){
    console.log('Amenties_setter',data)
    this.extraAmenties=''
    data.forEach((element:any) => {
      this.extraAmenties =this.extraAmenties + element.item_id +','
    });
   }
   onSortChnage(event:any){
if(this.sortOption1 == 'option1'){
  this.SortdataToAPI[0].key='createdOn'
  this.SortdataToAPI[0].direction='ASC'

}else if(this.sortOption1 == 'option2'){
  this.SortdataToAPI[0].key='price'
  this.SortdataToAPI[0].direction='ASC'
}else if(this.sortOption1 == 'option3'){
  this.SortdataToAPI[0].key='price'
  this.SortdataToAPI[0].direction='DESC'
}else if(this.sortOption1 == 'option4'){

}else if(this.sortOption1 == 'option5'){

}
console.log('onSortChnage',this.SortdataToAPI,this.sortOption1)
this.CallApi()
   }
   getSelecetedLocations(community : string[])
  {this.searchedCommunities=community
    console.log('getSelecetedLocations',this.searchedCommunities)
  }
  getAllLocation() {
    this.searchService.getAllLocation().subscribe((list: any) => {
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        this.availableLocations.push(element.community)

      }
    })


  }
  ClearSearch(){

    this.router.navigate(['property-search']);
    this.showpropertySearch=false
    this.propertySelectType = null
    this.propertyofferingType = null
    this.propertyBedroom= null
    this.propertyParking= null
    this.propertyBathroom= null
    this.pre_selectedAmenties = []
    this.toggoleShow=false
   this. extraAmenties=''
   this.priceMinValue = 100;
   this.priceMaxValue = 60000000;
   this.areaMinValue = 0;
   this.areaMaxValue = 50000;
   this.showpropertySearch=true
   this.PreselectedCommunity=[]

  }
  scrolltocontent(){
    let top = document.getElementById('scrollto');
    if (top !== null) {
      top.scrollIntoView({behavior: 'smooth'});
      top = null;
    }
  }

  mapViewNavigate(){
    console.log('property-map-view'+this.urlPath)
    this.router.navigateByUrl('property-map-view'+this.urlPath);
    if(this.urlPath == '/property-search'){
      this.router.navigateByUrl('property-map-view');
    }
    else{
      this.router.navigateByUrl('property-map-view'+this.urlPath);
    }
  }

}

