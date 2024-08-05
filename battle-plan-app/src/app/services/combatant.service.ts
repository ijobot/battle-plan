import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Combatant, ColorScheme, CombatantType } from '../models/combatant';
import * as _ from 'lodash';

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
    score: string
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

  clearAllCombatants(): void {
    this._combatants$.next([]);
  }
}
