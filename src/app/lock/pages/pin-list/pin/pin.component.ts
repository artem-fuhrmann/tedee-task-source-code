import { Component, Input, inject } from '@angular/core';
import { Pin } from '../../../../shared/interfaces/pin.interface';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent {
  @Input() data!: Pin;
  public lockId = 0;
}
