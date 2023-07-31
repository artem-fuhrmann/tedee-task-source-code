import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinDetailsRoutingModule } from './pin-details.routing';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { PinFormModule } from '../../components/pin-form/pin-form.module';
import { PinDetailsComponent } from './pin-details.component';

@NgModule({
  declarations: [PinDetailsComponent],
  imports: [CommonModule, PinDetailsRoutingModule, ModalModule, PinFormModule],
})
export class PinDetailsModule {}
