import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PinService } from '@shared/services/pin.service';
import { Pin } from '@shared/interfaces/pin.interface';
import { OPENED_LOCK_ID } from '../../tokens/opened-lock-id.token';

@Component({
  selector: 'app-pin-creation',
  templateUrl: './pin-creation.component.html',
  styleUrls: ['./pin-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinCreationComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private pinService = inject(PinService);
  private openedLockId = inject(OPENED_LOCK_ID);

  public formValue!: Pin;
  private _isFormValid!: boolean;

  public onValueChange(formData: Pin): void {
    this.formValue = formData;
  }

  public onCreateButtonClick(): void {
    if (this._isFormValid) {
      this.pinService.create(+this.openedLockId, this.formValue).subscribe();
      this._navigateUp();
      this.pinService.updateAll(+this.openedLockId).subscribe();
    }
  }

  public onCloseButtonClick(): void {
    this._navigateUp();
  }

  public onFormValidityChange(isValid: boolean): void {
    this._isFormValid = isValid;
  }

  private _navigateUp(): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
