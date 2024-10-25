import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorScheme, CombatantType } from '../models/combatant';
import { ModalAppearance } from '../models/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modal$ = new Observable<boolean>();
  public modalAppearance$ = new Observable<ModalAppearance>();
  private _modal$ = new BehaviorSubject(false);
  private _modalAppearance$ = new BehaviorSubject<ModalAppearance>({
    type: CombatantType.player,
    color: ColorScheme.player,
  });

  constructor() {
    this.modal$ = this._modal$.asObservable();
    this.modalAppearance$ = this._modalAppearance$.asObservable();
  }

  setModalAppearance(type: CombatantType, color: ColorScheme): void {
    this._modalAppearance$.next({ type, color });
  }

  openModal(): void {
    this._modal$.next(true);
  }

  closeModal(): void {
    this._modal$.next(false);
  }
}
