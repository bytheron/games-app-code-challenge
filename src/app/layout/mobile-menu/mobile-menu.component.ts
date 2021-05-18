import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  public links: object[];

  constructor() { }

  ngOnInit(): void {
    // built it for a purpose of perhaps the navigation items come from an endpoint
    const linkObj = [
      { path: 'deals', title: 'Deals' },
      { path: 'games', title: 'Games' },
      { path: 'stores', title: 'Stores' },
    ];
    this.links = linkObj;
  }

}
