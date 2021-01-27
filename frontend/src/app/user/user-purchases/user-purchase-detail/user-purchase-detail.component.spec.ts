import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchaseDetailComponent } from './user-purchase-detail.component';

describe('UserPurchaseDetailComponent', () => {
  let component: UserPurchaseDetailComponent;
  let fixture: ComponentFixture<UserPurchaseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchaseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPurchaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
