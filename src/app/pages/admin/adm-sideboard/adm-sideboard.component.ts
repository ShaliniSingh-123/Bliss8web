import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  
  selector: 'app-adm-sideboard',
  templateUrl: './adm-sideboard.component.html',
  styleUrls: ['./adm-sideboard.component.scss']
})
export class AdmSideboardComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() selectedPage = new EventEmitter<any>();


  currentSelected: string = '';
  constructor(
    public router: Router, 
    public route: ActivatedRoute) { }

  ngOnInit(): void {

    if(!this.currentSelected){
      this.currentSelected = 'DASHBOARD'
      this.selectedPage.emit('DASHBOARD');
    }
  }

  pageRoute(page:string){
    this.selectedPage.emit(page);
    console.log (page);

    this.currentSelected = page;
  }
}


