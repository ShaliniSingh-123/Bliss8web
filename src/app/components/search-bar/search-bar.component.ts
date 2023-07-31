
import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAccordion} from '@angular/material/expansion';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit,OnChanges {
  panelOpenState = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  locationCtrl = new FormControl('');
  filteredLocations : any =null;
  locations: string[] = [];
  @Input()
  defaultSelectedLoction: any = [];
  @Input()
  allLocations: string[] = [];


  @ViewChild('locationInput') locationInput !: ElementRef<HTMLInputElement>;


  @ViewChild(MatAccordion) accordion !: MatAccordion;
  @Output() newLocationEvent = new EventEmitter<string[]>();
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.defaultSelectedLoction && this.defaultSelectedLoction.length != 0){
      this.locations = this.defaultSelectedLoction
    }else{
     console.log('this.locations =[]')
      this.locations =[]
    }
    this.onstart()

   }
  ngOnInit(): void {
console.log('defaultSelectedLoction',this.defaultSelectedLoction)
if(this.defaultSelectedLoction && this.defaultSelectedLoction.length != 0){
  this.locations = this.defaultSelectedLoction

}
this.onstart()
   }
   onstart(){
    this.filteredLocations = this.locationCtrl.valueChanges.pipe(
      startWith(null),
      map((location: string | null) => (location ? this._filter(location) : this.allLocations.slice())),
    );
   }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (this.allLocations.includes(value)) {
      this.locations.push(value);
      this.locationCtrl.setValue(null);
      event.value="";
    }

    // Clear the input value
    event.chipInput!.clear();
    this.locationCtrl.setValue(null);
   // this.locationCtrl.setValue(null);
   //console.log(this.locations)
this.getLocation()
  }
  remove(location: string): void {
    const index = this.locations.indexOf(location);
    if (index >= 0) {
      this.locations.splice(index, 1);
    }
  }
getLocation()
{
  this.newLocationEvent.emit(this.locations);

}
clear()
{
  console.log("clearing lcoations")
  this.locations=[]
}
  selected(event: MatAutocompleteSelectedEvent): void {
    this.locations.push(event.option.viewValue);
    this.locationInput.nativeElement.value = '';
    this.getLocation()

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();


    return this.allLocations.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
