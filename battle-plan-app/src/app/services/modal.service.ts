import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _showModal$ = new BehaviorSubject(false);

  constructor() {}

  modalState(): Observable<boolean> {
    return this._showModal$;
  }

  openModal(): void {
    this._showModal$.next(true);
  }

  closeModal(): void {
    this._showModal$.next(false);
  }
}
