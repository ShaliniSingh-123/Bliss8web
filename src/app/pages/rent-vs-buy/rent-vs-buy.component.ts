import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rent-vs-buy',
  templateUrl: './rent-vs-buy.component.html',
  styleUrls: ['./rent-vs-buy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RentVsBuyComponent implements OnInit {
  covenants: any = [
    { provinceID: 1 },

  ];
  fees: any = [
    {
      "name": "Agent fees",
      "value": 23100
    },
    {
      "name": "Land department fees",
      "value": 44580
    },
    {
      "name": "Registration trustee fee",
      "value": 4200
    },
    {
      "name": "Mortgage valuation fee",
      "value": 3150
    },
    {
      "name": "Mortgage processing fee",
      "value": 4620
    },
    {
      "name": "Mortgage registration fee",
      "value": 2200
    },
    {
      "name": "Knowledge fee",
      "value": 290
    }
  ];
  rentValue!:number;
  buyValue!:number;
  graptgTitle:string ='Buying and renting both are equal'
  
  constructor() { }
  
  ngOnInit(): void {
    this.covenants.forEach((_covenants: { isExpanded: boolean; }) => {
      _covenants.isExpanded = true;
    });
  }
  barChartOptions: ChartOptions = {
    responsive: true,

    scales: {
      y: {
        min: 5000,
        max: 50000,
        
        title: {
          display: true,
          align: 'center',
          text: 'MONTHLY COST (AED)',
          color: '#000000',
          padding: 10,
        },



      }
    },


  };
  


  barChartLabels: string[] = ['RENT', 'BUY'];
 
  minValueRent: number = 0;
  maxValueRent: number = 50000;
  optionsAreaRent: Options = {
    floor: 0,
    ceil: 50000,
    
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return  value + "<span> sqft</span>";
        case LabelType.High:
          return "+" + value + "<span> sqft</span>";
        default:
          return '';
      }
    }
  };
  optionsYearlyRent: Options = {
    floor: 30000,
    ceil: 500000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span><strong style='color:black'> "+ value +" AED</strong></span>";
        case LabelType.High:
          return "+" + "<span><strong style='color:black'> "+ value +" AED</strong></span>";
        default:
          return '';
      }
    }
  };
  optionsPropCost: Options = {
    floor: 30000,
    ceil: 500000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span><strong style='color:black'> "+ value +" AED</strong></span>";
        case LabelType.High:
          return "+" + "<span><strong style='color:black'> "+ value +" AED</strong></span>";
        default:
          return '';
      }
    }
  };
  optionsDownPay: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span><strong style='color:black'> "+ value +"%</strong></span>";
        case LabelType.High:
          return "+" + "<span><strong style='color:black'> "+ value +"%</strong></span>";
        default:
          return '';
      }
    }
  };
  optionsStayProp: Options = {
    floor: 1,
    ceil: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span><strong style='color:black'> "+ value +" Years</strong></span>";
        case LabelType.High:
          return "+" + "<span><strong style='color:black'> "+ value +" Years</strong></span>";
        default:
          return '';
      }
    }
  };
  optionsInterestRate: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span><strong style='color:black'> "+ value +"%</strong></span>";
        case LabelType.High:
          return "+" + "<span><strong style='color:black'> "+ value +"%</strong></span>";
        default:
          return '';
      }
    }
  };
  optionsLoanPeriod: Options = {
    floor: 1,
    ceil: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span><strong style='color:black'> "+ value +" Years</strong></span>";
        case LabelType.High:
          return "+" + "<span><strong style='color:black'> "+ value +" Years</strong></span>";
        default:
          return '';
      }
    }
  };
  yearlyRentControl: FormControl = new FormControl(1);
  propertyCostControl: FormControl = new FormControl(1);
  downPayControl: FormControl = new FormControl(1);
  durationControl: FormControl = new FormControl(1);
  interestControl:FormControl = new FormControl(1);
  loanPeriodControl:FormControl = new FormControl(1);
  monthlyFees!: number;
  agentCommission: number = 5040;
  ejariFees: number = 195;
  buyingFees:number=82140;
  propertyCost!: number;
  downPayment!: number;
  downPaymentAmount!:number;
  PA!: number;
  rentDuration!: number;
  interestRate!:number;
  loanPeriod!: number;
  yearlyrent!:number;
  estimation!:number;
  rent1!:number;
  rent2!:number;

  monthlyRent(){
    this.monthlyFees=this.yearlyRentControl.value/12;
    return this.monthlyFees;
  }
 
  onPa() {
    this.PA = this.propertyCostControl.value - ((this.downPayControl.value / 100) * this.propertyCostControl.value);
    return this.PA
  };
 

  onrent() {
     this.rent1= (this.monthlyFees * (this.durationControl.value * 12)) + this.agentCommission +( this.ejariFees*this.durationControl.value);
     this.rentValue=((this.rent1/12)/this.durationControl.value);
     return this.rent1;
  };
   
  onBuy(){
    this.rent2=(this.buyingFees+((this.estimation*12)*this.durationControl.value));
    this.buyValue=((this.rent2/12)/this.durationControl.value);
    return this.rent2;
  }
 
  dowpaymentCalculation(): number {
     this.downPaymentAmount= ((this.downPayControl.value / 100) * this.propertyCostControl.value);
   return this.downPaymentAmount;
  };
  calculation():number{
    const interestPerYear = this.PA * (this.interestControl.value / 100);
    const dueAmountPerYear = this.PA / this.loanPeriodControl.value;
    this.estimation = (interestPerYear / 12) + (dueAmountPerYear / 12);
  
    return this.estimation;
   

  };

  
  barChartData: ChartDataset[] = [
    {
      data: [this.rentValue,this.buyValue ],
      
      backgroundColor: ['#00B8C6', '#0A213C'],
      indexAxis: 'x',
      barPercentage: 0.5,
      hoverBackgroundColor: ['#00B8C6', '#0A213C'],
    },
  ];
 
  forText(){
    if(this.rentValue == this.buyValue){
  
      this.graptgTitle='Buying and renting both are equal'

    }
    else{
      if(this.rent1 > this.rent2){
        const percent=(this.buyValue * 100)/this.rentValue
       const a= percent.toFixed(3).slice(0,-1)
        this.graptgTitle="Buying is "+a+"% cheaper than Renting"

      }
      else{
        const percent: number=(this.rentValue * 100)/this.buyValue
        const a= percent.toFixed(3).slice(0,-1)
        this.graptgTitle="Renting  is "+a+"% cheaper than Buying";
      }
    }
    
  }
  onChangeSliders(){
    console.log("onchange detectors")
   this. barChartData = [
      {
        data: [this.rentValue,this.buyValue ],
        
        backgroundColor: ['#00B8C6', '#0A213C'],
        indexAxis: 'x',
        barPercentage: 0.5,
        hoverBackgroundColor: ['#00B8C6', '#0A213C'],
      },
    ];
    this.forText();
  }

}
