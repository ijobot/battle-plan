import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalAppearance, ModalContent, ModalText } from '../models/modal';
import { ColorScheme } from '../models/color-scheme';
import { Combatant } from '../models/combatant';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal$ = new Observable<boolean>();
  modalAppearance$ = new Observable<ModalAppearance>();
  combatantToUpdate?: Combatant;

  private _modal$ = new BehaviorSubject(false);
  private _modalAppearance$ = new BehaviorSubject<ModalAppearance>({
    colorScheme: ColorScheme.player,
    modalText: ModalText.player,
    modalContent: ModalContent.addCombatant,
  });

  constructor() {
    this.modal$ = this._modal$.asObservable();
    this.modalAppearance$ = this._modalAppearance$.asObservable();
  }

  // Needs work
  setModalAppearance(
    colorScheme: ColorScheme,
    modalText: ModalText,
    modalContent: ModalContent,
    combatant?: Combatant
  ): void {
    if (combatant) {
      this.combatantToUpdate = combatant;
    }
    this._modalAppearance$.next({
      colorScheme,
      modalText,
      modalContent,
      ...(combatant ? combatant : undefined),
    });
  }

  // Needs work
  getCombatantToUpdate(): Combatant | undefined {
    return this.combatantToUpdate;
  }

  openModal(): void {
    this._modal$.next(true);
  }

  closeModal(): void {
    this._modal$.next(false);
  }
}
