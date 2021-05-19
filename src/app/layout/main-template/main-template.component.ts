import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageDataInterface } from 'src/app/core/interfaces/page-data.interface';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() viewData: any;
  @Input() isLoading: boolean;
  @Input() pageData: PageDataInterface;
  @Output() searchResultsData: EventEmitter<any> = new EventEmitter();

  public isMobile: boolean;
  public searchResults: any[];
  public isSearching: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.searchResults = [];

    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) this.isMobile = true;
      else this.isMobile = false;
    });
  }

  public reloadPage(): void {
    window.location.reload();
  }

  public filterResults(inputValue: string): void {
    // TODO: improve this
    this.isSearching = true;
    const viewDataList = this.viewData;

    if (inputValue.length <= 3) this.searchResultsData.emit(viewDataList);
    
    viewDataList.forEach(item => {
      const titleLower = item.title.toLowerCase();
      if (inputValue.length >= 3) {
        if (titleLower.includes(inputValue.toLowerCase())) {
          this.searchResults.push(item);
        }
      }
    });

    this.searchResultsData.emit(this.searchResults);
    this.isSearching = false;
  }

}
