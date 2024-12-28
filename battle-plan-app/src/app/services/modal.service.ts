import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalAppearance, ModalContent, ModalText } from '../models/modal';
import { ColorScheme } from '../models/color-scheme';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modal$ = new Observable<boolean>();
  public modalAppearance$ = new Observable<ModalAppearance>();
  private _modal$ = new BehaviorSubject(false);
  private _modalAppearance$ = new BehaviorSubject<ModalAppearance>({
    modalText: ModalText.player,
    colorScheme: ColorScheme.player,
    modalContent: ModalContent.addCombatant,
  });

  constructor() {
    this.modal$ = this._modal$.asObservable();
    this.modalAppearance$ = this._modalAppearance$.asObservable();
  }

  setModalAppearance(
    modalText: ModalText,
    colorScheme: ColorScheme,
    modalContent: ModalContent
  ): void {
    this._modalAppearance$.next({
      modalText,
      colorScheme,
      modalContent,
    });
  }

  openModal(): void {
    this._modal$.next(true);
  }

  closeModal(): void {
    this._modal$.next(false);
  }
}
