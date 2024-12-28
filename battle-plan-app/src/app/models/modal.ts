import { ColorScheme } from './color-scheme';

export interface ModalAppearance {
  modalText: ModalText;
  colorScheme: ColorScheme;
  modalContent: ModalContent;
}

export enum ModalText {
  player = 'Player',
  monster = 'Monster',
  npc = 'NPC',
  save = 'Save Current Party?',
  load = 'Load Saved Party?',
  clear = 'Clear All Combatants?',
}

export enum ModalContent {
  addCombatant = 'addCombatant',
  saveParty = 'saveParty',
  loadParty = 'loadParty',
  clearAll = 'clearAll',
}
