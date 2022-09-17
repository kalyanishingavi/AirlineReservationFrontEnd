import { TestBed } from '@angular/core/testing';

import { AdminSearchService } from './admin-search.service';

describe('AdminSearchService', () => {
  let service: AdminSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
