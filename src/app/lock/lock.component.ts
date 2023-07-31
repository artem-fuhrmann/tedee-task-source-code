import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OPENED_LOCK_ID } from './tokens/opened-lock-id.token';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss'],
  providers: [
    {
      provide: OPENED_LOCK_ID,
      useFactory: () => {
        const activatedRoute = inject(ActivatedRoute);
        return activatedRoute.snapshot.paramMap.get('id');
      },
    },
  ],
})
export class LockComponent {}
