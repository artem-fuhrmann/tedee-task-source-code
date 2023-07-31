import { Injectable, inject } from '@angular/core';
import { Pin } from '@shared/interfaces/pin.interface';
import { PinListApiService } from '@shared/services/pin-list-api.service';
import {
  BehaviorSubject,
  Observable,
  forkJoin,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  private pinListApiService = inject(PinListApiService);

  private _pinList$ = new BehaviorSubject<Pin[] | null>(null);

  public pinList$ = this._pinList$.asObservable();

  constructor() {}

  public updateAll(lockId: number): Observable<Pin[]> {
    return this._getIds(lockId).pipe(
      mergeMap((data) => {
        const pins$ = data.map((pinId) => this.get(lockId, pinId));
        return pins$.length ? forkJoin(pins$) : of([]);
      }),
      map((pinList) => {
        return pinList.sort((a, b) => a.alias.localeCompare(b.alias));
      }),
      tap((data) => this._pinList$.next(data))
    );
  }

  public get(lockId: number, pinId: number): Observable<Pin> {
    return this.pinListApiService
      .getPin(lockId, pinId)
      .pipe(map((response) => response.result));
  }

  public create(lockId: number, pin: Pin): Observable<null> {
    return this.pinListApiService.createPin(lockId, pin);
  }

  public delete(lockId: number, pinId: number): Observable<null> {
    return this.pinListApiService.deletePin(lockId, pinId);
  }

  private _getIds(lockId: number): Observable<number[]> {
    return this.pinListApiService.getPinList(lockId).pipe(
      map((response) => response.result.pins),
      map((pins) => pins.map((pin) => pin.id))
    );
  }
}
