import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class MortgageCalculatorComponent implements OnInit {

  estimation!: number;
  public value2: number = 4.5;
  public value3: number = 6.5;
  public mortgage!: number;
  interestPerYear!: number;
  dueAmountPerYear!: number;

  constructor(private route: Router) { }
  interestControl: FormControl = new FormControl(1);
  downPaymentControl: FormControl = new FormControl(1);
  propertyControl: FormControl = new FormControl(1);
  durationControl: FormControl = new FormControl(1);
  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  options1: Options = {
    floor: 1,
    ceil: 1500000,
    translate: (val: number): string => {
      return 'AED' + val;
    },
    showSelectionBar: true,
    step: 1,
  }
  options2: Options = {
    floor: 0,
    ceil: 80,
    translate: (val: number): string => {
      return val + '%';
    },
    showSelectionBar: true,
    step: 1,
  }
  options3: Options = {
    floor: 0,
    ceil: 10,
    translate: (val: number): string => {
      return val + '%';
    },
    showSelectionBar: true,
    step: 0.01,
  }
  options4: Options = {
    floor: 0,
    ceil: 50,
    translate: (val: number): string => {
      return val + "Years";
    },
    showSelectionBar: true,
    step: 1,
  }
  calculation(): number {
    this.mortgage = this.propertyControl.value - ((this.downPaymentControl.value / 100) * this.propertyControl.value);
    this.interestPerYear = this.mortgage * (this.interestControl.value / 100);
    this.dueAmountPerYear = this.mortgage / this.durationControl.value;
    this.estimation = (this.interestPerYear / 12) + (this.dueAmountPerYear / 12);
    return this.estimation;
  }
}