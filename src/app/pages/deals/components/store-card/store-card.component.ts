import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() cardData: any;
  public bannerImage: string;
  private imagesEndpoint = 'https://www.cheapshark.com';

  constructor() { }

  ngOnInit(): void {
    const card = this.cardData;
    if (card.images.banner.length !== 0) this.bannerImage = `${this.imagesEndpoint}/${card.images.banner}`;
    else this.bannerImage = '';
  }

  public viewMore(): void {
    // TODO: build this navigation
    alert('feature coming soon!');
  }

}
