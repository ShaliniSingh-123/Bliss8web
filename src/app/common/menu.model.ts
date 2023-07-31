export interface MenuModel {
    text?: string;
    icon?: string;
    routerLink: string;
    children?: MenuItemModel[];
    isShow?: boolean
    anyChildSelected? : boolean
    selectedItem? :MenuItemModel
  }
  export interface MenuItemModel {
    text?: string;
    icon?: string;
    routerLink?: string;
  }