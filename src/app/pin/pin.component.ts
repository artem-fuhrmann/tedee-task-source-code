import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent {
  name: string = 'test Pin';
  from: Date = new Date('2023-07-29T08:49:39.772Z');
  to: Date = new Date('2023-07-29T08:49:39.772Z');
}
