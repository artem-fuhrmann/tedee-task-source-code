import { Component, inject } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-pin-manager-header',
  templateUrl: './pin-manager-header.component.html',
  styleUrls: ['./pin-manager-header.component.scss'],
})
export class PinManagerHeaderComponent {
  private modalService = inject(ModalService);
  openModal() {
    return () => {
      this.modalService.toggleModalStatus();
    };
  }
}
