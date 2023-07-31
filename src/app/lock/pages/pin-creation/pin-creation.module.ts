import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinCreationComponent } from './pin-creation.component';
import { PinCreationRoutingModule } from './pin-creation.routing';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { PinFormModule } from '../../components/pin-form/pin-form.module';

@NgModule({
  declarations: [PinCreationComponent],
  imports: [CommonModule, PinCreationRoutingModule, ModalModule, PinFormModule],
})
export class PinCreationModule {}
