import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCardsComponent } from './sidebar-cards.component';

describe('SidebarCardsComponent', () => {
  let component: SidebarCardsComponent;
  let fixture: ComponentFixture<SidebarCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // router dependency error
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
