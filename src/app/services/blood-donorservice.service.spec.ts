import { TestBed } from '@angular/core/testing';

import { BloodDonorserviceService } from './blood-donorservice.service';

describe('BloodDonorserviceService', () => {
  let service: BloodDonorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
