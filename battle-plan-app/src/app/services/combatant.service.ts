import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Combatant, CombatantColor, CombatantType } from '../models/combatant';

const exampleCombatant = {color: CombatantColor.player, name: 'Joe', type: CombatantType.player, score: 15};

@Injectable({
  providedIn: 'root'
})
export class CombatantService {
  private _combatants$ = new BehaviorSubject<Combatant[]>([exampleCombatant])

  constructor() {}

  getCombatants(): Observable<Combatant[]> {
    return this._combatants$;
  }

  addCombatant(type: CombatantType, rowColor: CombatantColor): void {
    const newCombatant: Combatant = { 
      color: rowColor,
      name: '', 
      type: type, 
      score: ''
    }
    this._combatants$.next([...this._combatants$.getValue(), newCombatant])
  }

  removeCombatant(index: number): void {
    this._combatants$.getValue().splice(index, 1);
    this._combatants$.next([...this._combatants$.getValue()])
  }

  clearAllCombatants(): void {
    this._combatants$.next([]);
  }
}
