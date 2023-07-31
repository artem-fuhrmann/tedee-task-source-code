import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@NgModule({
  declarations: [ModalComponent, ModalHeaderComponent, ModalFooterComponent],
  imports: [CommonModule],
  exports: [ModalComponent, ModalHeaderComponent, ModalFooterComponent],
})
export class ModalModule {}
