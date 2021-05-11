import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToApplyCarLoanComponent } from './how-to-apply-car-loan.component';

describe('HowToApplyCarLoanComponent', () => {
  let component: HowToApplyCarLoanComponent;
  let fixture: ComponentFixture<HowToApplyCarLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToApplyCarLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToApplyCarLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
