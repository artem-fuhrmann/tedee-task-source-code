import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _isModalOpen: boolean = false;
  private _modelStatus$: BehaviorSubject<boolean> = new BehaviorSubject(
    this._isModalOpen
  );

  constructor() {}

  public getModelStatus(): Observable<boolean> {
    return this._modelStatus$.asObservable();
  }

  public toggleModalStatus() {
    this._isModalOpen = !this._isModalOpen;
    this._modelStatus$.next(this._isModalOpen);
  }
}
