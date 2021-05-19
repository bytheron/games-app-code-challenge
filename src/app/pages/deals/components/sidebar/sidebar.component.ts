import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() otherStoreData: any;
  @Input() storeNames: any[];

  public cards: any;
  private storeNamesList = [];

  constructor() { }

  ngOnInit(): void {
    this.getStoreNames(this.otherStoreData, this.storeNames);
  }

  // TODO: finish this logic - brain hit a null
  private getStoreNames(otherStoreData: any, storeNames: any[]): void {
    console.log('otherStoreData => ', otherStoreData);
    console.log('storeNames => ', storeNames);
    storeNames.forEach(store => {
      otherStoreData.forEach(data => {
        if (store.storeID === data.storeID) this.storeNamesList.push(store.storeName);
        else return;
      });
    });
    console.log('stores details => ', this.storeNamesList);
  }

}
