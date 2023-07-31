import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PinConsecutiveCheckerService {
  constructor() {}

  public check(pin: string): boolean {
    if (pin.length <= 1) {
      return false;
    }

    for (let i = 1; i < pin.length; i++) {
      if (this._isConsecutive(+pin[i - 1], +pin[i])) {
        return true;
      }
    }

    return false;
  }

  private _isConsecutive(prev: number, current: number): boolean {
    return Math.abs(prev - current) === 1;
  }
}
