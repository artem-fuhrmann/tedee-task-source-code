import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MockHttpService } from '@mock/mock-http.service';
import { Pin } from '../interfaces/pin.interface';
import { BaseResponse } from '../interfaces/base-response.interface';
import { PinListResult } from '../interfaces/pin-list-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PinListApiService {
  private mockHttpService = inject(MockHttpService);

  constructor() {}

  public getPinList(id: number): Observable<BaseResponse<PinListResult>> {
    return this.mockHttpService.getPinList(id);
  }

  public getPin(lockId: number, pinId: number): Observable<BaseResponse<Pin>> {
    return this.mockHttpService.getPin(lockId, pinId);
  }

  public createPin(lockId: number, pin: Pin): Observable<null> {
    return this.mockHttpService.post(lockId, pin);
  }

  public deletePin(lockId: number, pinId: number): Observable<null> {
    return this.mockHttpService.remove(lockId, pinId);
  }
}
