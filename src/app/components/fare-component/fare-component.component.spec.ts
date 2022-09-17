import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareComponentComponent } from './fare-component.component';

describe('FareComponentComponent', () => {
  let component: FareComponentComponent;
  let fixture: ComponentFixture<FareComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
