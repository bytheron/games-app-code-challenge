import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CheapSharkService } from './cheap-shark.service';

describe('CheapSharkService', () => {
  let service: CheapSharkService;
  let API_BASE: string;
  let httpClient: HttpClient;
  let deals: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheapSharkService);
  });

  // httpclient dependency error
  // it('should be created', () => {
  //   expect(httpClient.get(`${API_BASE}/deals`)).toContain(deals);
  //   expect(API_BASE).toBeDefined();
  // });
});
