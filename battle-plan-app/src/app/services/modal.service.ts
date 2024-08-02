import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorScheme, CombatantType } from '../models/combatant';
import { ModalAppearance } from '../models/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _showModal$ = new BehaviorSubject(false);
  private _modalAppearance$ = new BehaviorSubject<ModalAppearance>({
    type: CombatantType.player,
    color: ColorScheme.player,
  });

  constructor() {}

  modalState(): Observable<boolean> {
    return this._showModal$;
  }

  modalAppearance(): Observable<ModalAppearance> {
    return this._modalAppearance$;
  }

  setModalAppearance(type: CombatantType, color: ColorScheme): void {
    this._modalAppearance$.next({ type, color });
  }

  openModal(): void {
    this._showModal$.next(true);
  }

  closeModal(): void {
    this._showModal$.next(false);
  }
}
