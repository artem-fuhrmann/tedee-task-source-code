import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinListComponent } from './pin-list.component';
import { PinListRoutingModule } from './pin-list.routing';
import { ListComponent } from './list/list.component';
import { PinComponent } from './pin/pin.component';
import { PinManagerHeaderComponent } from './pin-manager-header/pin-manager-header.component';

@NgModule({
  declarations: [
    PinListComponent,
    ListComponent,
    PinComponent,
    PinManagerHeaderComponent,
  ],
  imports: [CommonModule, PinListRoutingModule],
})
export class PinListModule {}
