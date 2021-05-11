import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapprovedloanComponent } from './viewapprovedloan.component';

describe('ViewapprovedloanComponent', () => {
  let component: ViewapprovedloanComponent;
  let fixture: ComponentFixture<ViewapprovedloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapprovedloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapprovedloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
