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
  public storesPageData: any;

  constructor(private dealsService: CheapSharkService) { }

  ngOnInit(): void {
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
