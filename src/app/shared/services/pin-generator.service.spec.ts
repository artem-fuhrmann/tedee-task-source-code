import { TestBed } from '@angular/core/testing';

import { PinGeneratorService } from './pin-generator.service';

describe('PinGeneratorService', () => {
  let service: PinGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
