import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookflightsComponent } from './bookflights.component';

describe('BookflightsComponent', () => {
  let component: BookflightsComponent;
  let fixture: ComponentFixture<BookflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookflightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
