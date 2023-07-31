import { Injectable, inject } from '@angular/core';
import { PinConsecutiveCheckerService } from './pin-consecutive-checker.service';

@Injectable({
  providedIn: 'root',
})
export class PinGeneratorService {
  private pinConsecutiveCheckerService = inject(PinConsecutiveCheckerService);
  private _length = 6;

  generate() {
    let pin = '';

    while (pin.length < this._length) {
      const digit = Math.floor(Math.random() * 10).toString();

      if (pin.length === 0) {
        pin += digit;
        continue;
      }
      const lastTwoDigits = pin[pin.length - 1] + digit;

      if (this.pinConsecutiveCheckerService.check(lastTwoDigits)) {
        continue;
      }

      pin += digit;
    }

    return pin;
  }
  constructor() {}
}
