import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheapSharkService } from 'src/app/core/services/cheap-shark.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public cards$: Observable<any>;
  public isLoading: boolean;

  constructor(private dealsService: CheapSharkService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchDeals();
  }

  private fetchDeals() {
    this.dealsService.fetchDeals().subscribe(resp => {
      if (resp) this.isLoading = false;
      this.cards$ = resp;
    });
  }

}
