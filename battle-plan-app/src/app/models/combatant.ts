export interface Combatant {
  color: string;
  name: string;
  type: CombatantType;
  score: number;
}

export enum CombatantType {
  player = 'Add Player',
  monster = 'Add Monster',
  npc = 'Add NPC',
  save = 'Save Current Party?',
  load = 'Load Saved Party?',
  clear = 'Clear All Combatants?',
}

export enum ColorScheme {
  player = '#2bb78d',
  monster = '#df5858',
  npc = '#5986da',
  default = '#695b85',
}

export enum ContentType {
  addCombatant = 'addCombatant',
  saveParty = 'saveParty',
  loadParty = 'loadParty',
  clearAll = 'clearAll',
}
