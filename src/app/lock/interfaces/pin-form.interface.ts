import { FormControl } from '@angular/forms';

export interface PinForm {
  alias: FormControl<string | null>;
  pin: FormControl<string | null>;
  startDate: FormControl<Date | null>;
  endDate: FormControl<Date | null>;
}
