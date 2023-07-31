import { Component, OnInit } from '@angular/core';
 interface PeriodicElement {
    Layout: string;
    Property: number;
    Type: number;
    PostedOn: string;
    Price: string;
    Agent: string;
    Status: string;
    Actions: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
    {Property: 1, Layout: 'Hydrogen', Type: 1.0079, PostedOn: 'H', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 2, Layout: 'Helium', Type: 4.0026, PostedOn: 'He', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 3, Layout: 'Lithium', Type: 6.941, PostedOn: 'Li', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 4, Layout: 'Beryllium', Type: 9.0122, PostedOn: 'Be', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 5, Layout: 'Boron', Type: 10.811, PostedOn: 'B', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 6, Layout: 'Carbon', Type: 12.0107, PostedOn: 'C', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 7, Layout: 'Nitrogen', Type: 14.0067, PostedOn: 'N', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 8, Layout: 'Oxygen', Type: 15.9994, PostedOn: 'O', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 9, Layout: 'Fluorine', Type: 18.9984, PostedOn: 'F', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
    {Property: 10, Layout: 'Neon', Type: 20.1797, PostedOn: 'Ne', Price:'AED 20, 000',Agent:'Akbar Ladak', Status:'true', Actions:'View | Edit'},
  ];
@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.scss']
})

export class MyPropertiesComponent implements OnInit {
  
  //displayedColumns: string[] = ['Property', 'Layout', 'weight', 'symbol'];
  displayedColumns: string[] = ['Property', 'Layout', 'Type', 'PostedOn','Price','Agent','Status','Actions'];

  dataSource = ELEMENT_DATA;
  constructor()   { 

     }


  ngOnInit(): void {
    

  }
 


}
