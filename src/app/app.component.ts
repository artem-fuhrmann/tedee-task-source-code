import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './shared/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private modalService = inject(ModalService);

  public isModalOpen!: boolean;

  ngOnInit() {
    this.modalService.getModelStatus().subscribe((data) => {
      this.isModalOpen = data;
    });
  }
}
