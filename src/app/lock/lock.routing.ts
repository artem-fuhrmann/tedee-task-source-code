import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockComponent } from './lock.component';
import { LockParams } from '@shared/enums/lock-params.enum';
import { LockRoute } from '@shared/enums/lock-route.enum';

const routes: Routes = [
  {
    path: `:${LockParams.Id}`,
    component: LockComponent,
    children: [
      {
        path: `${LockRoute.Pins}`,
        loadChildren: () =>
          import('./pages/pin-list/pin-list.module').then(
            (m) => m.PinListModule
          ),
      },
      {
        path: '**',
        redirectTo: `${LockRoute.Pins}`,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '0', //hardcode default lockId value
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockRoutingModule {}
