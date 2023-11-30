import { TestBed } from '@angular/core/testing';

import { ConsomeAPIService } from './consome-api.service';

describe('ConsomeAPIService', () => {
  let service: ConsomeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsomeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
