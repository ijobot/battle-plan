import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Combatant, ColorScheme, CombatantType } from '../models/combatant';

@Injectable({
  providedIn: 'root',
})
export class CombatantService {
  private _combatants$ = new BehaviorSubject<Combatant[]>([]);

  constructor() {}

  getCombatants(): Observable<Combatant[]> {
    return this._combatants$;
  }

  addCombatant(
    type: CombatantType,
    color: ColorScheme,
    name: string,
    score: number
  ): void {
    const newestCombatant: Combatant = { color, name, type, score };
    const updatedCombatants = [
      ...this._combatants$.getValue(),
      newestCombatant,
    ];
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
    const combatantToChange = this._combatants$.getValue()[index];
    if (updateType == 'name') {
      combatantToChange.name = newValue as string;
    }
    if (updateType == 'score') {
      combatantToChange.score = newValue as number;
    }
    this._combatants$.next([
      ...this._combatants$
        .getValue()
        .sort((a, b) => Number(b.score) - Number(a.score)),
    ]);
    console.log(this._combatants$.getValue());
  }

  clearAllCombatants(): void {
    this._combatants$.next([]);
  }
}
