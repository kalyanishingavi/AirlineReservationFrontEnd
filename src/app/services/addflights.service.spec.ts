import { TestBed } from '@angular/core/testing';

import { AddflightsService } from './addflights.service';

describe('AddflightsService', () => {
  let service: AddflightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddflightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
