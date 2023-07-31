import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinListComponent {}
