import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Combatant } from '../models/combatant';
import { LocalStorageService } from './local-storage.service';
import { ColorScheme } from '../models/color-scheme';
import { ModalText } from '../models/modal';

@Injectable({
  providedIn: 'root',
})
export class CombatantService {
  combatants$ = new Observable<Combatant[]>();
  savedParty$ = new Observable<Combatant[]>();
  private _savedParty$ = new BehaviorSubject<Combatant[]>(
    this.localStorageService.checkLocalStorage()
  );
  private _combatants$ = new BehaviorSubject<Combatant[]>([]);

  constructor(private localStorageService: LocalStorageService) {
    this.combatants$ = this._combatants$.asObservable();
    this.savedParty$ = this._savedParty$.asObservable();
  }

  addCombatant(
    colorScheme: ColorScheme,
    type: ModalText,
    name: string,
    score: number
  ): void {
    // Set ColorScheme based on ModalText

    // Create new combatant object
    const newestCombatant: Combatant = {
      colorScheme,
      type,
      name,
      score,
    };

    // Add to combatants array
    const updatedCombatants = [
      ...this._combatants$.getValue(),
      newestCombatant,
    ];

    // Sort list
    this._combatants$.next(
      updatedCombatants.sort((a, b) => Number(b.score) - Number(a.score))
    );
  }

  removeCombatant(index: number): void {
    this._combatants$.getValue().splice(index, 1);
    this._combatants$.next([...this._combatants$.getValue()]);
  }

  updateCombatant(
    index: number,
    updateType: string,
    newValue: number | string
  ): void {
    // Find combatant by index
    const combatantToChange = this._combatants$.getValue()[index];

    // Update correct property
    if (updateType == 'name') {
      combatantToChange.name = newValue as string;
    }
    if (updateType == 'score') {
      combatantToChange.score = newValue as number;
    }

    // Re-sort list based on changes
    this._combatants$.next([
      ...this._combatants$.getValue().sort((a, b) => b.score - a.score),
    ]);
  }

  saveCurrentCombatants(): void {
    // Save only works if combatants are on the board
    if (this._combatants$.getValue().length) {
      this._savedParty$.next(this._combatants$.getValue());
      this.localStorageService.saveData(
        'Saved Party',
        JSON.stringify(this._combatants$.getValue())
      );
    }
  }

  loadSavedCombatants(): void {
    // Load only works if previous combatants have been saved
    const savedParty = this.localStorageService.getData('Saved Party');
    if (this._savedParty$.getValue().length || savedParty) {
      this._combatants$.next(this._savedParty$.getValue());
    }
  }

  clearAllCombatants(): void {
    // Does not affect saved combatants
    this._combatants$.next([]);
  }
}
