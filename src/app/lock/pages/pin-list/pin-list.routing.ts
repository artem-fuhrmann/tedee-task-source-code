import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinListComponent } from './pin-list.component';
import { LockRoute } from '@shared/enums/lock-route.enum';

const routes: Routes = [
  {
    path: '',
    component: PinListComponent,
    children: [
      {
        path: `${LockRoute.Create}`,
        loadChildren: () =>
          import('../pin-creation/pin-creation.module').then(
            (m) => m.PinCreationModule
          ),
      },
      {
        path: `${LockRoute.Details}`,
        loadChildren: () =>
          import('../pin-details/pin-details.module').then(
            (m) => m.PinDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinListRoutingModule {}
