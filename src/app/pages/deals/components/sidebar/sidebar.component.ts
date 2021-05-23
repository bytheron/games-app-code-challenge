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

  constructor() { }

  ngOnInit(): void {
    this.cards = [];
    this.getStoreNames(this.otherStoreData, this.storeNames);
  }
  
  private getStoreNames(otherStoreData: any, storeNames: any[]): void {
    // check the list of stores and compare their IDs
    // then if they match create an array of store names
    storeNames.forEach(store => {
      otherStoreData.cheaperStores.forEach(data => {
        if (store.storeID === data.storeID) this.cards.push(
            {
              storeName: store.storeName,
              retailPrice: data.retailPrice,
              salePrice: data.salePrice,
              dealId: data.dealID
            }
          );
        else return;
      });
    });
  }

}
