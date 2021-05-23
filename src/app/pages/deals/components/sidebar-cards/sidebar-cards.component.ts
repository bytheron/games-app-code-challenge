import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-cards',
  templateUrl: './sidebar-cards.component.html',
  styleUrls: ['./sidebar-cards.component.scss']
})
export class SidebarCardsComponent implements OnInit {
  @Input() cardData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public viewMore(): void {
    // TODO: get this to navigate to the correct url
    this.router.navigateByUrl(`details/${this.cardData.dealId}`);
  }

}
