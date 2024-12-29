import { ColorScheme } from './color-scheme';

export interface Combatant {
  colorScheme: ColorScheme;
  type: CombatantType;
  name: string;
  score: number;
}

export enum CombatantType {
  player = 'Player',
  monster = 'Monster',
  npc = 'NPC',
}
