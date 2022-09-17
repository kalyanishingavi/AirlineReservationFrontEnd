import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedAdminComponent } from './allowed-admin.component';

describe('AllowedAdminComponent', () => {
  let component: AllowedAdminComponent;
  let fixture: ComponentFixture<AllowedAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowedAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
