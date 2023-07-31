import { Injectable, inject } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { PinConsecutiveCheckerService } from '@shared/services/pin-consecutive-checker.service';

@Injectable({ providedIn: 'root' })
export class PinValidator implements Validator {
  private pinConsecutiveCheckerService = inject(PinConsecutiveCheckerService);
  validate(): ValidatorFn {
    return (control: AbstractControl<any, any>): ValidationErrors | null => {
      const controlValue = control.value ?? '';
      if (this.pinConsecutiveCheckerService.check(controlValue)) {
        return { pin: true };
      }
      return null;
    };
  }
}
