import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloweduserComponent } from './alloweduser.component';

describe('AlloweduserComponent', () => {
  let component: AlloweduserComponent;
  let fixture: ComponentFixture<AlloweduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlloweduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlloweduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
