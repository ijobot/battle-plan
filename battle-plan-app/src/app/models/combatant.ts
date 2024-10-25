export interface Combatant {
  color: string;
  name: string;
  type: CombatantType;
  score: number;
}

export enum CombatantType {
  player = 'Player',
  monster = 'Monster',
  npc = 'NPC',
}

export enum ColorScheme {
  player = '#2bb78d',
  monster = '#df5858',
  npc = '#5986da',
  default = '#695b85',
}
