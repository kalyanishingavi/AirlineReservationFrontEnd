import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinComponentComponent } from './checkin-component.component';

describe('CheckinComponentComponent', () => {
  let component: CheckinComponentComponent;
  let fixture: ComponentFixture<CheckinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
