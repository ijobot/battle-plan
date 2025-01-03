import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Combatant, CombatantType } from '../models/combatant';
import { LocalStorageService } from './local-storage.service';
import { STARTING_COMBATANTS } from '../models/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CombatantService {
  private localStorageService = inject(LocalStorageService);

  private _combatants$ = new BehaviorSubject<Combatant[]>(STARTING_COMBATANTS);
  private _savedParty$ = new BehaviorSubject<Combatant[]>(
    this.localStorageService.checkLocalStorage()
  );

  combatants$ = new Observable<Combatant[]>();
  savedParty$ = new Observable<Combatant[]>();

  constructor() {
    this.combatants$ = this._combatants$.asObservable();
    this.savedParty$ = this._savedParty$.asObservable();
  }

  addCombatant(type: CombatantType, name: string, score: number): void {
    // Create new combatant object
    const newestCombatant: Combatant = {
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

  // Needs work on updateType functionality
  updateCombatant(
    combatant: Combatant,
    updateType: string,
    newValue: string | number
  ): void {
    // Update correct property
    if (updateType == 'name') {
      combatant.name = newValue as string;
    }
    if (updateType == 'type') {
      combatant.type = CombatantType.monster;
    }
    if (updateType == 'score') {
      combatant.score = newValue as number;
    }

    // Re-sort list based on changes
    this._combatants$.next([
      ...this._combatants$.getValue().sort((a, b) => b.score - a.score),
    ]);
  }

  saveCurrentCombatants(): void {
    // Save only works if combatants are on the list
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
    // Does not affect saved combatants - just clears the list
    this._combatants$.next([]);
  }
}
