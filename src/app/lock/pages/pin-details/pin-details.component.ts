import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PinService } from '@shared/services/pin.service';
import { OPENED_LOCK_ID } from '../../tokens/opened-lock-id.token';
import { Pin } from '@shared/interfaces/pin.interface';

@Component({
  selector: 'app-pin-details',
  templateUrl: './pin-details.component.html',
  styleUrls: ['./pin-details.component.scss'],
})
export class PinDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private pinService = inject(PinService);
  private openedLockId = inject(OPENED_LOCK_ID);
  private router = inject(Router);

  private _formValue!: Pin;
  private _pinId = this.activatedRoute.snapshot.paramMap.get('pinId')!;

  public pinData$ = this.pinService.get(+this.openedLockId, +this._pinId);

  onValueChange(formData: Pin) {
    this._formValue = formData;
  }

  onDeleteButtonClick() {
    this.pinService.delete(+this.openedLockId, +this._pinId).subscribe();
    this._navigateUp();
    this.pinService.updateAll(+this.openedLockId).subscribe();
  }

  onCloseButtonClick() {
    this._navigateUp();
  }

  private _navigateUp() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }
}
