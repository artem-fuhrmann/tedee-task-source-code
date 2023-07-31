import { Injectable } from '@angular/core';
import { Pin } from '../shared/interfaces/pin.interface';
import { Observable, of } from 'rxjs';
import { PinListResult } from '../shared/interfaces/pin-list-response.interface';
import { BaseResponse } from '../shared/interfaces/base-response.interface';
import { database } from './mock-database';

@Injectable({
  providedIn: 'root',
})
export class MockHttpService {
  constructor() {}

  private _database: Pin[] = structuredClone(database);

  public getPinList(lockId: number): Observable<BaseResponse<PinListResult>> {
    const responseBody: BaseResponse<PinListResult> = {
      success: true,
      errorMessages: ['No Errors!'],
      statusCode: 200,
      result: {
        listVersion: 1,
        pins: this._database.map(({ id, alias }) => ({ id, alias })),
      },
    };
    return of(responseBody);
  }

  public getPin(lockId: number, pinId: number): Observable<BaseResponse<Pin>> {
    const responseBody: BaseResponse<Pin> = {
      success: true,
      errorMessages: ['No Errors!'],
      statusCode: 200,
      result: this._getPinById(pinId),
    };

    return of(responseBody);
  }

  public post(lockId: number, pin: Pin) {
    this._database.push({ ...pin, id: Math.random() });
    return of(null); //simulate httpClient return
  }

  public remove(lockId: number, pinId: number) {
    this._database = this._database.filter((item) => item.id !== pinId);
    return of(null); //simulate httpClient return
  }

  private _getPinById(pinId: number) {
    const [pin] = this._database.filter((pin) => pin.id === pinId);
    return pin;
  }
}
