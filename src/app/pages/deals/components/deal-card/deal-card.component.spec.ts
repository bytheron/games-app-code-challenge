import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DealCardComponent } from './deal-card.component';

describe('DealCardComponent', () => {
  let component: DealCardComponent;
  let fixture: ComponentFixture<DealCardComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to deals'), () => {
    router.navigateByUrl('deals');
  }
});
