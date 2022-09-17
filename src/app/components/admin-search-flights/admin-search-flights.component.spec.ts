import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchFlightsComponent } from './admin-search-flights.component';

describe('AdminSearchFlightsComponent', () => {
  let component: AdminSearchFlightsComponent;
  let fixture: ComponentFixture<AdminSearchFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSearchFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSearchFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
