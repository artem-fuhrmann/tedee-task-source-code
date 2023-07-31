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

  it('should correctly check if value is consecutive', () => {
    expect(service.check('111211')).toBeTrue();
    expect(service.check('233578')).toBeTrue();
    expect(service.check('123578')).toBeTrue();
  }) 

  it('should correctly check if value is not consecutive', () => {
    expect(service.check('131588')).toBeFalse();
    expect(service.check('229557')).toBeFalse();
    expect(service.check('141518')).toBeFalse();
  })
});
