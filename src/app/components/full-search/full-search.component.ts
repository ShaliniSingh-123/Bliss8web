
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { SearchDataService } from "src/app/services/search-data/search-data";
import { PropertySearchService } from 'src/app/services/property-search/property-search.service';
import { Options, LabelType, ChangeContext, PointerType } from "@angular-slider/ngx-slider";
import { myCRMConstants } from 'src/app/common/myCRM-constant';
import { SearchBarComponent } from "src/app/components/search-bar/search-bar.component";
interface IData {
  code: string;
  name: string;
};
@Component({
  selector: 'app-search',
  templateUrl: './full-search.component.html',
  styleUrls: ['./full-search.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class FullSearchComponent {
  bedroomChecks: any = 'BedroomRentCheckBoxs1';
  up: string = "100px";
  buttonToggle: Boolean = true;
  bedroomVariables: boolean[] = []
  bedroomVariablesExtra: boolean[] = []
  bedroomBuyVariables: boolean[] = []
  bedroomBuyVariablesExtra: boolean[] = []
  bathroomVariables: boolean[] = []
  bathroomVariablesExtra: boolean[] = []
  bathroomBuyVariables: boolean[] = []
  bathroomBuyVariablesExtra: boolean[] = []
  parkingVariables: boolean[] = []
  parkingVariablesExtra: boolean[] = []
  parkingBuyVariables: boolean[] = []
  parkingBuyVariablesExtra: boolean[] = []

  showIt: boolean = false;
  propertySelectType: any;
  propertySelectTypeBuy: any;
  toppings = new FormControl('');
  Amenities: any = [];
  AmenitiesBuy: any = [];
  BathroomList: string[] = ['4', '5', '6', 'More'];
  BedroomList: string[] = ['4', '5', '6', 'More'];
  ParkingList: string[] = ['4', '5', '6', 'More'];
  form: any;
  formrent: any;
  offeringType: any;
  searchedLocations: string[] = [];
  searchedLocationsBuy: string[] = [];
  availableLocations: string[] = [];
  availableAmenities: { code: string, name: string }[] = [];
  CRM_CONSTANTS = myCRMConstants;
  openCollapseRent: number = 0;
  openCollapseBuy: number = 0;
  minValueRent: number = 0;
  maxValueRent: number = 50000;
  minPriceRent: number = 0;
  maxPriceRent: number = 60000000;
  minValueBuy: number = 0;
  maxValueBuy: number = 50000;
  minPriceBuy: number = 0;
  maxPriceBuy: number = 60000000;
  InvestRentMin?: number = this.minPriceRent;
  InvestRentMax?: number = this.maxPriceRent;
  AreaRentMin?: number = this.minValueRent;
  AreaRentMax?: number = this.maxValueRent;
  InvestBuyMin?: number = this.minPriceBuy;
  InvestBuyMax?: number = this.maxPriceBuy;
  AreaBuyMin?: number = this.minValueBuy;
  AreaBuyMax?: number = this.maxValueBuy;
  InitialBedroomExtra= ''
  InitialBathroomExtra= ''
  InitialParkingExtra= ''
  InitialBedroomBuyExtra= ''
  InitialBathroomBuyExtra= ''
  InitialParkingBuyExtra= ''
  AmenitiesRent= ''
  getChangeContextString(changeContext: ChangeContext): [number?, number?] {
    let min = changeContext.value
    let max = changeContext.highValue
    if (max == undefined)
      max = 0
    if (min > max)
      return [max, min];
    return [min, max];

  }
  onUserChangeInvestRent(changeContext: ChangeContext): [number?, number?] {
    let MinMax = this.getChangeContextString(changeContext);
    this.InvestRentMax = MinMax[1];
    this.InvestRentMin = MinMax[0];
    console.log(this.InvestRentMin, this.InvestRentMax)
    return [this.InvestRentMin, this.InvestRentMax]
  }
  onUserChangeInvestBuy(changeContext: ChangeContext): [number?, number?] {
    let MinMax = this.getChangeContextString(changeContext);
    this.InvestBuyMax = MinMax[1];
    this.InvestBuyMin = MinMax[0];
    console.log(this.InvestBuyMin, this.InvestBuyMax)
    return [this.InvestBuyMin, this.InvestBuyMax]
  }
  onUserChangeAreaRent(changeContext: ChangeContext): [number?, number?] {
    let MinMax = this.getChangeContextString(changeContext);
    this.AreaRentMax = MinMax[1];
    this.AreaRentMin = MinMax[0];
    console.log(this.AreaRentMin, this.AreaRentMax)
    return [this.AreaRentMin, this.AreaRentMax]

  }
  onUserChangeAreaBuy(changeContext: ChangeContext): [number?, number?] {
    let MinMax = this.getChangeContextString(changeContext);
    this.AreaBuyMax = MinMax[1];
    this.AreaBuyMin = MinMax[0];
    console.log(this.AreaBuyMin, this.AreaBuyMax)
    return [this.AreaBuyMin, this.AreaBuyMax]

  }
  optionsAreaRent: Options = {
    floor: 0,
    ceil: 50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + "<span> sqft</span>";
        case LabelType.High:
          return "+" + value + "<span> sqft</span>";
        default:
          return '';
      }
    }
  };
  optionPriceRent: Options = {
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
  optionsAreaBuy: Options = {
    floor: 0,
    ceil: 50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + "<span> sqft</span>";
        case LabelType.High:
          return "+" + value + "<span> sqft</span>";
        default:
          return '';
      }
    }
  };
  optionPriceBuy: Options = {
    floor: 0,
    ceil: 60000000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span>AED </span>" + value;
        case LabelType.High:
          return "<span>AED </span>" + '+' + value;
        default:
          return '';
      }
    }
  };


  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild(SearchBarComponent) child: SearchBarComponent = new SearchBarComponent();
  @ViewChild('locationsBuy') child2: SearchBarComponent = new SearchBarComponent();





  constructor(private router: Router, private route: ActivatedRoute, private searchService: SearchDataService) {
    this.form = new FormGroup({
      type: new FormControl("", Validators.required),
      location: new FormControl("", Validators.required),
      searchkey: new FormControl("", Validators.required)
    })
    this.formrent = new FormGroup({
      type: new FormControl("", Validators.required),
      location: new FormControl("", Validators.required),
      searchkey: new FormControl("", Validators.required)
    })

  }
  clearLocation() {
    this.child.clear();
  }
  clearLocationBuy() {
    this.child2.clear();
  }
  clearType() {

  }
  UpdateExtraBedroom(value: any) {
    this.bedroomVariablesExtra = value;
    this.checkConsoleBedroom()
  }
  UpdateExtraBedroomBuy(value: any) {
    this.bedroomBuyVariablesExtra = value;
    this.checkConsoleBedroomBuy()
  }

  UpdateExtraBathroom(value: any) {
    this.bathroomVariablesExtra = value;
    this.checkConsoleBathRoom()
  }
  UpdateExtraBathroomBuy(value: any) {
    this.bathroomBuyVariablesExtra = value;
    this.checkConsoleBathRoomBuy()
  }

  UpdateExtraParking(value: any) {
    this.parkingVariablesExtra = value;
    this.checkConsoleParking()
  }
  UpdateExtraParkingBuy(value: any) {
    this.parkingBuyVariablesExtra = value;
    this.checkConsoleParkingBuy()
  }
  UpdateAmeneties(value: any) {
    this.Amenities = value;
    console.log(this.Amenities)
  }
  UpdateAmenetiesBuy(value: any) {
    this.AmenitiesBuy = value;
    console.log(this.AmenitiesBuy)
  }


  // UpdateInvestValue(value: any) {
  //   this.bedroomVariablesExtra = value;
  //   this.checkConsole()
  // }
  toggleExpansionBuy() {
    this.openCollapseBuy = (this.openCollapseBuy == 0 ? 1 : 0);
    this.up = (this.up == "100px" ? "35%" : "100px");
    console.log(this.up)

  }
  toggleExpansionRent() {
    this.openCollapseRent = (this.openCollapseRent == 0 ? 1 : 0);
    this.up = (this.up == "100px" ? "35%" : "100px");
    console.log(this.up)

  }
  ngOnInit(): void {
    this.getAllLocation();
    this.getAllAmenities();

  }
  conf = {
    paginationBulletRender: function (swiper: any, _index: any, className: string) {
      return '< div class=" ' + className + ' ">< div class="inner-dot">< /div>< /div>';
    }
  }
  configauto = {
    spaceBetween: 0,
    centeredSlides: true,

    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true
    },
    // direction: horizontal

  }
  config = {
    slidesPerView: 3,
    spaceBetween: 42,


    // pagination: true,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 8,
        spaceBetween: 53,


      },
      412: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      820: {
        slidesPerView: 7,
        spaceBetween: 8,
      }
      ,
      768: {
        slidesPerView: 7,
        spaceBetween: 8,
      }
      ,
      540: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
      280: {
        slidesPerView: 2,
        spaceBetween: 76,
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 40,
      }, 360: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  }
  get cityName() {
    return this.form.get('name');
  }
  buyButton() {
    this.buttonToggle = false;
  }
  getSelecetedLocations(locations: string[]) {
    this.searchedLocations = locations
    console.log(this.searchedLocations)
  }
  getSelecetedLocationsBuy(locations: string[]) {
    this.searchedLocationsBuy = locations
    console.log(this.searchedLocationsBuy)
  }
  getAllLocation() {
    this.searchService.getAllLocation().subscribe((list: any) => {
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        this.availableLocations.push(element.community)

      }
    })


  }
  getAllAmenities() {
    this.searchService.getAllAmneties().subscribe((list: any) => {
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        let amn: IData = {

          'code': element.code,
          'name': element.amenityName
        }
        this.availableAmenities.push(amn)

      }
    })
    console.log(this.availableAmenities)


  }
  rentButton() {
    this.buttonToggle = true;
  }
  switchRent()
  {
    //this.openCollapseBuy == 0;
    if(this.up!="100px")
    this.toggleExpansionBuy()

  }
  switchBuy(params: any) {
    //this.openCollapseRent == 0;
    if(this.up!="100px")
    this.toggleExpansionRent()
    console.log(params)
    if (params = 'RS') {
      this.offeringType = params;
    } else {
      this.offeringType = 'RR'
    }


  }
  selectOptionBuy(value: number) {
    //getted from event
    //getted from binding
    this.propertySelectTypeBuy = value
    console.log(this.propertySelectTypeBuy)
  }
  public checkConsoleParking() {
    console.log("----------------------")
    var l = []
    for (let i = 0; i < this.parkingVariables.length; i++) {
      const element = this.parkingVariables[i];

      if (element == true)
        l.push(i + 1)

    }

    for (let i = 0; i < this.parkingVariablesExtra.length; i++) {
      const element = this.parkingVariablesExtra[i];
      l.push(element);

    }
    console.log(l)
    return l;
  };
  public checkConsoleParkingBuy() {
    console.log("----------------------")
    var l = []
    for (let i = 0; i < this.parkingBuyVariables.length; i++) {
      const element = this.parkingBuyVariables[i];

      if (element == true)
        l.push(i + 1)

    }

    for (let i = 0; i < this.parkingBuyVariablesExtra.length; i++) {
      const element = this.parkingBuyVariablesExtra[i];
      l.push(element);

    }
    console.log(l)
    return l;
  };
  public checkConsoleBedroom() {
    console.log("----------------------")
    var l = []
    for (let i = 0; i < this.bedroomVariables.length; i++) {
      const element = this.bedroomVariables[i];
      if (i == 0) {
        if (element == true)
          l.push("studio");
      }
      else {
        if (element == true)
          l.push(i)
      }
    }
    for (let i = 0; i < this.bedroomVariablesExtra.length; i++) {
      const element = this.bedroomVariablesExtra[i];
      l.push(element);

    }
    console.log(l)
    return l;
  };
  public checkConsoleBedroomBuy() {
    console.log("----------------------")
    var l = []
    for (let i = 0; i < this.bedroomBuyVariables.length; i++) {
      const element = this.bedroomBuyVariables[i];
      if (i == 0) {
        if (element == true)
          l.push("studio");
      }
      else {
        if (element == true)
          l.push(i)
      }
    }
    for (let i = 0; i < this.bedroomBuyVariablesExtra.length; i++) {
      const element = this.bedroomBuyVariablesExtra[i];
      l.push(element);

    }
    console.log(l)
    return l;
  };
  public checkConsoleBathRoom() {
    console.log("----------------------")
    var l = []
    for (let i = 0; i < this.bathroomVariables.length; i++) {
      const element = this.bathroomVariables[i];

      if (element == true)
        l.push(i + 1)
    }
    for (let i = 0; i < this.bathroomVariablesExtra.length; i++) {
      const element = this.bathroomVariablesExtra[i];
      l.push(element);

    }
    console.log(l)
    return l;
  };
  public checkConsoleBathRoomBuy() {
    console.log("----------------------")
    var l = []
    for (let i = 0; i < this.bathroomBuyVariables.length; i++) {
      const element = this.bathroomBuyVariables[i];

      if (element == true)
        l.push(i + 1)
    }
    for (let i = 0; i < this.bathroomBuyVariablesExtra.length; i++) {
      const element = this.bathroomBuyVariablesExtra[i];
      l.push(element);

    }
    console.log(l)
    return l;
  };

  onSearchBuy() {
    console.log("test", this.formrent.value)
    console.log('working..');
    const location = this.searchedLocationsBuy;
    // const searchkey = searchdata.searchkey;
    this.offeringType = 'RS'
    console.log(location)

    if (this.propertySelectTypeBuy == undefined)
      this.propertySelectTypeBuy = ''
    console.log(this.propertySelectTypeBuy)

    let redirectUrl = 'property-search?community=' + location + '&property_type=' + this.propertySelectTypeBuy + '&offeringType=' + this.offeringType;
    if (this.checkConsoleBedroomBuy().length > 0) {
      redirectUrl += '&bedroom=' + this.checkConsoleBedroomBuy().join(',')
    }
    if (this.checkConsoleBathRoomBuy().length > 0) {
      redirectUrl += '&bathroom=' + this.checkConsoleBathRoomBuy().join(',')
    }
    if (this.checkConsoleParkingBuy().length > 0) {
      redirectUrl += '&parking=' + this.checkConsoleParkingBuy().join(',')
    }
    if (this.AmenitiesBuy.length > 0) {
      redirectUrl += '&amenities=' + this.AmenitiesBuy.join(',')
    }
    redirectUrl += '&price_min=' + this.InvestBuyMin
    redirectUrl += '&price_max=' + this.InvestBuyMax
    redirectUrl += '&area_min=' + this.AreaBuyMin
    redirectUrl += '&area_max=' + this.AreaBuyMax

    console.log(redirectUrl)

    this.router.navigateByUrl(redirectUrl)
  }

  selectOption(value: any) {
    //getted from event
    //getted from binding
    this.propertySelectType = value
    console.log(this.propertySelectType)
  }
  GetBedroomsRent() {

  }
  ClearInputsBuy() {
    this.clearLocationBuy();
    console.log("Locations Cleared")
    this.getSelecetedLocations([])
    this.selectOptionBuy(0)
    this.propertySelectTypeBuy = ''
    for (let i = 0; i < this.bedroomBuyVariables.length; i++) {
    this.bedroomBuyVariables[i]=false;
      
    }
    for (let i = 0; i < this.bathroomBuyVariables.length; i++) {
      this.bathroomBuyVariables[i]=false;
        
      }
      for (let i = 0; i < this.parkingBuyVariables.length; i++) {
        this.parkingBuyVariables[i]=false;
          
        }
    this.InitialBedroomBuyExtra = '';
    this.InitialBathroomBuyExtra = '';
    this.InitialParkingBuyExtra = '';
    this.AmenitiesBuy = '';
    this.UpdateAmenetiesBuy([])
    this.UpdateExtraBathroomBuy([])

    this.UpdateExtraBedroomBuy([])
    this.minPriceBuy = 0
    this.maxPriceBuy = 100000
    this.minValueBuy = 0
    this.maxValueBuy = 50000

    this.InvestBuyMin=this.minPriceBuy
    this.InvestBuyMax=this.maxPriceBuy


    this.AreaBuyMin = this.minValueBuy
    this.AreaBuyMax = this.maxValueBuy
  
  }
  ClearInputsRent() {
    this.clearLocation();
    console.log("Locations Cleared")
    this.getSelecetedLocations([])
    this.getSelecetedLocationsBuy([])
    this.selectOption(0)
    this.propertySelectTypeBuy = ''
    for (let i = 0; i < this.bedroomVariables.length; i++) {
    this.bedroomVariables[i]=false;
      
    }
    for (let i = 0; i < this.bathroomVariables.length; i++) {
      this.bathroomVariables[i]=false;
        
      }
      for (let i = 0; i < this.parkingVariables.length; i++) {
        this.parkingVariables[i]=false;
          
        }
    this.InitialBedroomExtra = '';
    this.InitialBathroomExtra = '';
    this.InitialParkingExtra = '';
    this.AmenitiesRent = '';
    this.UpdateAmeneties([])
    this.UpdateExtraBedroom([])
    this.UpdateExtraBathroom([])
    this.minPriceRent = 0
    this.maxPriceRent = 100000
    this.minValueRent = 0
    this.maxValueRent = 50000

    this.InvestRentMin=this.minPriceRent
    this.InvestRentMax=this.maxPriceRent


    this.AreaRentMin = this.minValueRent
    this.AreaRentMax = this.maxValueRent
  
  }
  onSearchRent() {
    console.log("test", this.formrent.value)
    console.log('working..');
    let searchdata = this.formrent.value
    const location = this.searchedLocations;
    const searchkey = searchdata.searchkey;
    this.offeringType = 'RR'
    console.log(location)
    if (this.propertySelectType == undefined)
      this.propertySelectType = ''
    console.log(this.propertySelectType)
    let redirectUrl = 'property-search?community=' + location + '&property_type=' + this.propertySelectType + '&offeringType=' + this.offeringType;
    if (this.checkConsoleBedroom().length > 0) {
      redirectUrl += '&bedroom=' + this.checkConsoleBedroom().join(',')
    }
    if (this.checkConsoleBathRoom().length > 0) {
      redirectUrl += '&bathroom=' + this.checkConsoleBathRoom().join(',')
    }
    if (this.checkConsoleParking().length > 0) {
      redirectUrl += '&parking=' + this.checkConsoleParking().join(',')
    }
    if (this.Amenities.length > 0) {
      redirectUrl += '&amenities=' + this.Amenities.join(',')
    }
    redirectUrl += '&price_min=' + this.InvestRentMin
    redirectUrl += '&price_max=' + this.InvestRentMax
    redirectUrl += '&area_min=' + this.AreaRentMin
    redirectUrl += '&area_max=' + this.AreaRentMax




    console.log(redirectUrl)
    this.router.navigateByUrl(redirectUrl)
  }
}

