import { TestBed } from '@angular/core/testing';

import { ApirickService } from './apirick.service';

describe('ApirickService', () => {
  let service: ApirickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApirickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
