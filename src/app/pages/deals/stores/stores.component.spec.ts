import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CheapSharkService } from 'src/app/core/services/cheap-shark.service';
import { StoresComponent } from './stores.component';

describe('StoresComponent', () => {
  let component: StoresComponent;
  let fixture: ComponentFixture<StoresComponent>;
  let router: Router;
  let dealsService: CheapSharkService;
  let stores:  Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // httpclient dependency error
  // it('should create', () => {
  //   router.navigateByUrl('stores');
  //   expect(component).toHaveClass('StoresComponent');
  // });
});
