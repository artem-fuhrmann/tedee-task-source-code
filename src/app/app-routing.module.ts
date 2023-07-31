import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from '@shared/enums/app-route.enum';

const routes: Routes = [
  {
    path: `${AppRoute.Lock}`,
    loadChildren: () => import('./lock/lock.module').then((m) => m.LockModule),
  },
  {
    path: '**',
    redirectTo: `${AppRoute.Lock}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
