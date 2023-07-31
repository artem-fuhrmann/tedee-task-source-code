import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockComponent } from './lock.component';
import { PinComponent } from './pages/pin-list/pin/pin.component';

const routes: Routes = [
  {
    path: ':id',
    component: LockComponent,
    children: [
      {
        path: 'pins',
        loadChildren: () =>
          import('./pages/pin-list/pin-list.module').then(
            (m) => m.PinListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockRoutingModule {}
