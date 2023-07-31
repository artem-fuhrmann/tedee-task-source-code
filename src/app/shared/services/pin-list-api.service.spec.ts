import { TestBed } from '@angular/core/testing';

import { PinListApiService } from './pin-list-api.service';

describe('PinListApiService', () => {
  let service: PinListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
