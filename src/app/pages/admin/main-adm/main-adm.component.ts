import { Component, OnInit } from '@angular/core';
import { MenuItemModel, MenuModel } from 'src/app/common/menu.model';
import { TabsService } from 'src/app/services/tabs/tabs.service';
export type componentRouting = | 'DASHBOARD' | 'LEAD' | 'USER';
@Component({
  selector: 'app-main-adm',
  templateUrl: './main-adm.component.html',
  styleUrls: ['./main-adm.component.scss']
})
export class MainAdmComponent implements OnInit {

  // pageRouting! : componentRouting;
  constructor(private tabService:TabsService) { }

  ngOnInit(): void {

  }
  onListTabsClick(value: any, value2: any) {
    this.menuList.forEach((y: any) => {
      if (value2.text == y.text) {
        y.anyChildSelected = true;
      }
      else {
        y.anyChildSelected = false;
      }
    });
    this.tabService.addToTheList(value);
  }
  
  menuList: MenuModel[] = [
    {
      text: "Dashboard",
      routerLink: "",
      isShow: true,
      anyChildSelected: false,
      
    },
    {
      routerLink: '',
      text: 'lead management ',
      isShow: false,
      anyChildSelected: false,
      
      children: [{
        text: 'buy',
      },
      {
        text: 'rent',
      },
      {
        text: 'sell',
      },
      {
        text: 'manage',
      },

      ],
      
    },
    {
      routerLink: '',
      text: 'user management ',
      isShow: false,
      anyChildSelected: false,
      children: [
        {
          text: 'add user',
        },
        {
          text: 'user role',
        },
      ]
    },
  ];
}
