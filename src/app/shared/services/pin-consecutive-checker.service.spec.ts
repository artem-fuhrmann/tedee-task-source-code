import { TestBed } from '@angular/core/testing';

import { PinConsecutiveCheckerService } from './pin-consecutive-checker.service';

describe('PinConsecutiveCheckerService', () => {
  let service: PinConsecutiveCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinConsecutiveCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
