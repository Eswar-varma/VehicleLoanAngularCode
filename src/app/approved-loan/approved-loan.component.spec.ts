import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedLoanComponent } from './approved-loan.component';

describe('ApprovedLoanComponent', () => {
  let component: ApprovedLoanComponent;
  let fixture: ComponentFixture<ApprovedLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
