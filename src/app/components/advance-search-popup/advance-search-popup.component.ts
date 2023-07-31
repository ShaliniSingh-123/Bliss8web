import { Component, Input, Output, EventEmitter, OnInit,ViewEncapsulation } from '@angular/core';
// import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-advance-search-popup',
  templateUrl: './advance-search-popup.component.html',
  styleUrls: ['./advance-search-popup.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AdvanceSearchPopupComponent implements OnInit {

  constructor() { }
  getValue: any;

  @Output() close = new EventEmitter<string>();
  AminitiesList: any = [
    {
      aminities_name: "Air Conditioning",
      value: "AC"
    },
    {
      aminities_name: "Gym",
      value: "GM",

    },
    {
      aminities_name: "Swimming Pool",
      value: "SP",

    },
    {
      aminities_name: "Central A/C",
      value: "CA"
    },
    {
      aminities_name: "Shared Spa",
      value: "SA"
    },
    {
      aminities_name: "Pets Allowed",
      value: "PA"
    },
    {
      aminities_name: "Barbecue Area",
      value: "BA"
    }, {
      aminities_name: "Central Heating",
      value: "CH"
    }, {
      aminities_name: "Kids Play Area",
      value: "KA"
    }, {
      aminities_name: "Retail",
      value: "RT"
    }, {
      aminities_name: "Balcony",
      value: "BC"
    }, {
      aminities_name: "View of Landmark",
      value: "VL"
    }, {
      aminities_name: "Built in Wardrobes",
      value: "BW"
    }, {
      aminities_name: "Children's Play Area",
      value: "CP"
    }, {
      aminities_name: "Free Wifi",
      value: "FW"
    }, {
      aminities_name: "Fitness Amenities",
      value: "FA"
    }, {
      aminities_name: "Maids Room",
      value: "MR"
    }, {
      aminities_name: "View of Water",
      value: "VW"
    }, {
      aminities_name: "Private Pool",
      value: "PP"
    },
    , {
      aminities_name: "Children's Pool",
      value: "P"
    }
  ];

  ngOnInit() {
    console.log(this.getValue);

  }

  closePopup() {
    this.close.emit('');
  }
  minValue: number = 0;
  maxValue: number = 50000;
  minPrice: number = 0;
  maxPrice: number = 100000;
  
  // options: Options = {
  //   floor: 0,
  //   ceil: 50000,
  //   translate: (value: number, label: LabelType): string => {
  //     switch (label) {
  //       case LabelType.Low:
  //         return  value + "<span> sqft</span>";
  //       case LabelType.High:
  //         return "+" + value + "<span> sqft</span>";
  //       default:
  //         return '';
  //     }
  //   }
  // };
  // optionprice: Options = {
  //   floor: 0,
  //   ceil: 100000,
  //   translate: (value: number, label: LabelType): string => {
  //     switch (label) {
  //       case LabelType.Low:
  //         return  "<span>AED </span>" + value ;
  //       case LabelType.High:
  //         return "<span>AED </span>" + '+' + value;
  //       default:
  //         return '';
  //     }
  //   }
  // };

  
  onSubmit(form: any) {
    console.log("working..", form.value);


  }
}
