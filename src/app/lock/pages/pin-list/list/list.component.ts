import { Component, inject } from '@angular/core';
import { Pin } from '../../../../shared/interfaces/pin.interface';
import { Observable, switchMap } from 'rxjs';
import { PinService } from '@shared/services/pin.service';
import { OPENED_LOCK_ID } from 'src/app/lock/tokens/opened-lock-id.token';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  private pinService = inject(PinService);
  private openedLockId = inject(OPENED_LOCK_ID);

  public pins$: Observable<Pin[] | null> = this.pinService
    .updateAll(+this.openedLockId)
    .pipe(switchMap(() => this.pinService.pinList$));
}
