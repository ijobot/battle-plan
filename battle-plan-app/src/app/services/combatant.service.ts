import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Combatant, CombatantType } from '../models/combatant';

const exampleCombatant = {name: 'joe', type: CombatantType.player, score: 15};

@Injectable({
  providedIn: 'root'
})
export class CombatantService {
  private _combatants$ = new BehaviorSubject<Combatant[]>([exampleCombatant])

  constructor() {}

  getCombatants(): Observable<Combatant[]> {
    return this._combatants$;
  }

  addPlayer(): void {
    this._combatants$.next([...this._combatants$.getValue(), exampleCombatant])
  }
}
