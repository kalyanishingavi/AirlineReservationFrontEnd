import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightsComponent } from './add-flights.component';

describe('AddFlightsComponent', () => {
  let component: AddFlightsComponent;
  let fixture: ComponentFixture<AddFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
