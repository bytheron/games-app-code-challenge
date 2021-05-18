import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DealDetailInterface } from 'src/app/core/interfaces/deal-detail.interface';
import { GameInfoInterface } from 'src/app/core/interfaces/game-info.interface';
import { CheapSharkService } from 'src/app/core/services/cheap-shark.service';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.scss']
})
export class DealDetailComponent implements OnInit, OnDestroy {
  private deal$: Observable<any>;
  private stores$: Observable<any>;
  private dealInfo: DealDetailInterface;
  private stores: any[];
  private dealIDFromParams: string;
  private unsubscribe$: Subject<void> = new Subject<void>();
  private timer: any;

  public dealInfoForView: DealDetailInterface;
  public isLoading: boolean;
  public savingText: string;
  public gameStoreName: string;

  constructor(private dealsService: CheapSharkService) {
    // router was stringifying the id, went with window location instead
    // this.route.paramMap.subscribe(params => {
    //   this.dealIDFromParams = params.get('id');
    // });
    if (window.location.pathname.includes('/details/')) {
      this.dealIDFromParams = window.location.pathname.split('/details/')[1];
    }
    this.fetchDealDetailsData(this.dealIDFromParams);
  }

  ngOnInit(): void {
    this.isLoading = true;
  }

  private fetchDealDetailsData(dealId: string) {
    this.deal$ = this.dealsService.fetchDealDetails(dealId);
    this.stores$ = this.dealsService.fetchStores();
    combineLatest([this.deal$, this.stores$])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([dealsResp, storeResp]) => {
        this.dealInfo = dealsResp;
        this.stores = storeResp;
      });

    // for timing issues, I used a timeout
    this.timer = setTimeout(() =>{
      this.isLoading = false;
      this.dealInfoForView = this.dealInfo;
      this.setSavingsText(this.dealInfoForView.gameInfo);
      this.fetchStoreInfo(this.dealInfoForView.gameInfo);
    }, 1000);

    // this.deal$.pipe(takeUntil(this.unsubscribe$))
    //           .subscribe(resp => {
    //             this.dealInfo = resp;
    //           });
    // // for timing issues, I used a timeout
    // this.timer = setTimeout(() =>{
    //   this.isLoading = false;
    //   this.dealInfoForView = this.dealInfo;
    //   this.setSavingsText(this.dealInfoForView.gameInfo);
    //   this.fetchStoreInfo(this.dealInfoForView.gameInfo);
    // }, 1000);
  }

  private setSavingsText(data: GameInfoInterface) {
    const retailPrice = parseInt(data.retailPrice);
    const salePrice = parseInt(data.salePrice);
    let savingAmount: any;

    if (salePrice && retailPrice > salePrice) savingAmount = (retailPrice - salePrice).toFixed(2);
    else savingAmount = 0;

    if (savingAmount !== 0) this.savingText = `You save $${savingAmount}`;
  }

  private fetchStoreInfo(gameInfo: GameInfoInterface) {
    this.stores.forEach(store => {
      if (store.storeID === gameInfo.storeID) this.gameStoreName = store.storeName;
      else return;
    });
  }

  public reloadPage(): void {
    window.location.reload();
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    clearTimeout(this.timer);
  }

}
