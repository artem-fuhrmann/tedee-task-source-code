import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinDetailsComponent } from './pin-details.component';

const routes: Routes = [{ path: ':pinId', component: PinDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinDetailsRoutingModule {}
