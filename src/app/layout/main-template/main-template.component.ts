import { Component, Input } from '@angular/core';
import { PageDataInterface } from 'src/app/core/interfaces/page-data.interface';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainLayoutComponent {
  @Input() viewData: any;
  @Input() isLoading: boolean;
  @Input() isMobile: boolean;
  @Input() pageData: PageDataInterface;

  constructor() { }

}
