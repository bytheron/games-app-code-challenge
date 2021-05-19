import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public links: object[];
  public isMobileLayout: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if (result.matches) this.isMobileLayout = true;
      else this.isMobileLayout = false;
    });

    // built it for a purpose of perhaps the navigation items come from an endpoint
    const linkObj = [
      { path: 'deals', title: 'Deals' },
      { path: 'games', title: 'Games' },
      { path: 'stores', title: 'Stores' },
    ];
    this.links = linkObj;
  }

}
