import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { PinForm } from 'src/app/lock/interfaces/pin-form.interface';
@Injectable({ providedIn: 'root' })
export class PinFormValidator implements Validator {
  validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup<PinForm>;
      const startDateControl = formGroup.controls.startDate;
      const endDateControl = formGroup.controls.endDate;
      const startDateValue = startDateControl.value ?? new Date();

      if (!endDateControl?.value) {
        return null;
      }

      if (
        startDateValue > endDateControl.value ||
        endDateControl.value.valueOf() < new Date().setHours(0, 0, 0, 0)
      ) {
        endDateControl.setErrors({ enddate: true });
      } else {
        endDateControl.setErrors(null);
      }

      return null;
    };
  }
}
