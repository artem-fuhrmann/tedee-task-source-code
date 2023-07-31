import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PinService } from '@shared/services/pin.service';
import { OPENED_LOCK_ID } from '../../tokens/opened-lock-id.token';
import { Pin } from '@shared/interfaces/pin.interface';

@Component({
  selector: 'app-pin-details',
  templateUrl: './pin-details.component.html',
  styleUrls: ['./pin-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private pinService = inject(PinService);
  private openedLockId = inject(OPENED_LOCK_ID);
  private router = inject(Router);
  private _pinId = this.activatedRoute.snapshot.paramMap.get('pinId')!;

  public pinData$ = this.pinService.get(+this.openedLockId, +this._pinId);

  private _formValue!: Pin;

  public onValueChange(formData: Pin): void {
    this._formValue = formData;
  }

  public onDeleteButtonClick(): void {
    this.pinService.delete(+this.openedLockId, +this._pinId).subscribe();
    this._navigateUp();
    this.pinService.updateAll(+this.openedLockId).subscribe();
  }

  public onCloseButtonClick(): void {
    this._navigateUp();
  }

  private _navigateUp(): void {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }
}
