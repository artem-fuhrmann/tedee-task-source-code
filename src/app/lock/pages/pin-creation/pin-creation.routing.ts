import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinCreationComponent } from './pin-creation.component';

const routes: Routes = [{ path: '', component: PinCreationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinCreationRoutingModule {}
