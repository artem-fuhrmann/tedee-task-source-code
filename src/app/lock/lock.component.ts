import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OPENED_LOCK_ID } from './tokens/opened-lock-id.token';
import { LockParams } from '@shared/enums/lock-params.enum';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: OPENED_LOCK_ID,
      useFactory: () => {
        const activatedRoute = inject(ActivatedRoute);
        return activatedRoute.snapshot.paramMap.get(`${LockParams.Id}`);
      },
    },
  ],
})
export class LockComponent {}
