
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { SearchDataService } from 'src/app/services/search-data/search-data';
@Component({
  selector: 'app-advance-features',
  templateUrl: './advance-features.component.html',
  styleUrls: ['./advance-features.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvanceFeaturesComponent implements OnInit {
  @Output() selectedItem = new EventEmitter();
  @Input() SelectedDefault :any= []
  loading = true
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};
  constructor(public searchDataService: SearchDataService) {

  }

  ngOnInit() {
    this.dropdownList = []
    this.searchDataService.getAllAmneties().subscribe(
      (res: any) => {
        if (res) {
          console.log(res)
          res.forEach((element: any) => {
            let data = { 'item_id': element.code, 'item_text': element.amenityName }
            this.dropdownList.push(data);
            console.log('this.SelectedDefault.indexOf( element.item_id)',this.SelectedDefault.indexOf( element.item_id))
            if(this.SelectedDefault.indexOf(element.item_id) != -1){
              this.selectedItems.push(element)
            }
          });
        }
        this.loading = false
console.log('selectedItems',this.selectedItems)
      },
      (error: any) => {
        console.log('Amenities API Failed')
        this.dropdownList = [];
        this.loading = false

      }
    )


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      // selectAllText: false,
      // unSelectAllText: false,
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false

    };
  }
  onItemSelect(item: any) {
    console.log(item);
    this.selectedItem.emit(this.selectedItems)
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
