import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapplicationdetailsComponent } from './loanapplicationdetails.component';

describe('LoanapplicationdetailsComponent', () => {
  let component: LoanapplicationdetailsComponent;
  let fixture: ComponentFixture<LoanapplicationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanapplicationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanapplicationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
