import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinDetailsComponent } from './pin-details.component';
import { LockParams } from '@shared/enums/lock-params.enum';

const routes: Routes = [
  { path: `:${LockParams.PinId}`, component: PinDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinDetailsRoutingModule {}
