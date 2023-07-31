import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pin-manager-header',
  templateUrl: './pin-manager-header.component.html',
  styleUrls: ['./pin-manager-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinManagerHeaderComponent {}
