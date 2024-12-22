export interface Combatant {
  colorScheme: string;
  name: string;
  type: ModalText;
  score: number;
}

export enum ModalText {
  player = 'Player',
  monster = 'Monster',
  npc = 'NPC',
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

export enum ModalContent {
  addCombatant = 'addCombatant',
  saveParty = 'saveParty',
  loadParty = 'loadParty',
  clearAll = 'clearAll',
}
