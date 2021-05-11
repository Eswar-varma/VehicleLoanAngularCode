import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationstatusComponent } from './viewapplicationstatus.component';

describe('ViewapplicationstatusComponent', () => {
  let component: ViewapplicationstatusComponent;
  let fixture: ComponentFixture<ViewapplicationstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapplicationstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapplicationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
