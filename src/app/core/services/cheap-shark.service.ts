import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheapSharkService {
  private API_BASE = 'https://www.cheapshark.com/api/1.0';

  constructor(private httpClient: HttpClient) { }

  // fetch the deals from the endpoint
  fetchDeals(): Observable<any> {
    return this.httpClient.get(`${this.API_BASE}/deals`);
  }

  // fetch selected deal details
  fetchDealDetails(dealId: string): Observable<any> {
    return this.httpClient.get(`${this.API_BASE}/deals?id=${dealId}`);
  }

  // fetch all stores
  fetchStores(): Observable<any> {
    return this.httpClient.get(`${this.API_BASE}/stores`);
  }
}
