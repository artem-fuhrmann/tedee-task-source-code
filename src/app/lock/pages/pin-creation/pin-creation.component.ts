import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PinService } from '@shared/services/pin.service';
import { Pin } from '@shared/interfaces/pin.interface';
import { OPENED_LOCK_ID } from '../../tokens/opened-lock-id.token';

@Component({
  selector: 'app-pin-creation',
  templateUrl: './pin-creation.component.html',
  styleUrls: ['./pin-creation.component.scss'],
})
export class PinCreationComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private pinService = inject(PinService);
  private openedLockId = inject(OPENED_LOCK_ID);

  public formValue!: Pin;
  private _isFormValid!: boolean;

  onValueChange(formData: Pin) {
    this.formValue = formData;
  }

  onCreateButtonClick() {
    if (this._isFormValid) {
      this.pinService.create(+this.openedLockId, this.formValue).subscribe();
      this._navigateUp();
      this.pinService.updateAll(+this.openedLockId).subscribe();
    }
  }

  onCloseButtonClick() {
    this._navigateUp();
  }

  onFormValidityChange(isValid: boolean) {
    this._isFormValid = isValid;
  }

  private _navigateUp() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
