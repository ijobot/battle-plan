export interface Combatant {
  type: CombatantType;
  name: string;
  score: number;
}

export enum CombatantType {
  player = 'Player',
  monster = 'Monster',
  npc = 'NPC',
  default = 'Default',
}
