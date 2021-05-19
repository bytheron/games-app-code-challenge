import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheapSharkService } from 'src/app/core/services/cheap-shark.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  public stores$: Observable<any>;
  public isLoading: boolean;
  public isMobileLayout: boolean;
  public storesPageData: any;

  constructor(public breakpointObserver: BreakpointObserver, private dealsService: CheapSharkService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) this.isMobileLayout = true;
      else this.isMobileLayout = false;
    });

    this.storesPageData = {
      title: 'Stores',
      searchPlaceholder: 'Search stores by name'
    };

    this.isLoading = true;
    this.fetchDeals();
  }

  private fetchDeals() {
    this.dealsService.fetchStores().subscribe(resp => {
      if (resp) this.isLoading = false;
      this.stores$ = resp;
    });
  }

}
