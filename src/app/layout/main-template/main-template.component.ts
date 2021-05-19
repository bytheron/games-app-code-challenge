import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { PageDataInterface } from 'src/app/core/interfaces/page-data.interface';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() viewData: any;
  @Input() isLoading: boolean;
  @Input() pageData: PageDataInterface;

  public isMobile: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) this.isMobile = true;
      else this.isMobile = false;
    });
  }

  public reloadPage(): void {
    window.location.reload();
  }

}
