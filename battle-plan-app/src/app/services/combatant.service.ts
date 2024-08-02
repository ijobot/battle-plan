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
    rowColor: ColorScheme,
    name: string,
    score: string
  ): void {
    const newCombatant: Combatant = {
      color: rowColor,
      name: name,
      type: type,
      score: score,
    };
    this._combatants$.next([...this._combatants$.getValue(), newCombatant]);
  }

  removeCombatant(index: number): void {
    this._combatants$.getValue().splice(index, 1);
    this._combatants$.next([...this._combatants$.getValue()]);
  }

  clearAllCombatants(): void {
    this._combatants$.next([]);
  }
}
