import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-cards',
  templateUrl: './sidebar-cards.component.html',
  styleUrls: ['./sidebar-cards.component.scss']
})
export class SidebarCardsComponent implements OnInit {
  @Input() cardData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
