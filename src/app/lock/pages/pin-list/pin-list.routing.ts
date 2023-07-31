import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinListComponent } from './pin-list.component';

const routes: Routes = [
  {
    path: '',
    component: PinListComponent,
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('../pin-creation/pin-creation.module').then(
            (m) => m.PinCreationModule
          ),
      },
      {
        path: 'details',
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
