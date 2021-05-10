import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLoginComponent } from './total-login.component';

describe('TotalLoginComponent', () => {
  let component: TotalLoginComponent;
  let fixture: ComponentFixture<TotalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
