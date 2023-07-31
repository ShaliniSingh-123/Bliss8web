import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/common/menu.model';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabsList: MenuModel[] = [];
  removeFromTheList(item: MenuModel) {
    let routeToNavigate: any;
    for (var i = 0; this.tabsList.length > 0; i++) {
      if (this.tabsList[i].routerLink == item.routerLink) {
        routeToNavigate = this.tabsList[i + 1];
        if (!routeToNavigate) {
          routeToNavigate = this.tabsList[i - 1];
          break;
        } else {
          break;
        }
      }
    }
  }
  addToTheList(item: MenuModel) {
    this._updateTabsValue();
    const res = this.tabsList.find((x) => x.routerLink == item.routerLink);
    if (!res) {
      item.isShow = true;
      this.tabsList.push(item);
    } else {
      this.tabsList.forEach((y) => {
        if (item.routerLink == y.routerLink) {
          y.isShow = true;
        }
      });
    }

    this._naviage(item.routerLink);
    
  }
  _updateTabsValue() {
    this.tabsList.filter((y) => (y.isShow = false));
  }
 
    _naviage(routeName: string) {
      if (routeName) {
        this.router.navigate([routeName]);
      } else {
        
        // const defualtModel = this._createDefaultModel();
        // this.tabsList.push(defualtModel)
        // this.router.navigate([defualtModel.routerLink]);
      }
    }
    // _createDefaultModel(){
    //   return {
    //     text: "Dashboard",
    //     routerLink: "",
    //     isShow: true
    //   }
    // }
  constructor(private router:Router ) { }
}
