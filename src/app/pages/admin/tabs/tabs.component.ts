import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/common/menu.model';
import { TabsService } from 'src/app/services/tabs/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() isTabSelected: boolean = false;

  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
  }
  onOpen(item: MenuModel) {
    this.tabsService.addToTheList(item);
  }
  onClose(item: MenuModel) {
    this.tabsService.removeFromTheList(item);
  }
}

