import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetailsInterface } from './../../../../core/interfaces/card-details.interface';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {
  @Input() cardData: CardDetailsInterface;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public viewMore(dealID: string) {
    this.router.navigateByUrl(`details/${dealID}`);
  }

}
