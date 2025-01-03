import { ColorScheme } from './color-scheme';
import { Combatant } from './combatant';

export interface ModalAppearance {
  colorScheme: ColorScheme;
  modalText: ModalText;
  modalContent: ModalContent;
  combatant?: Combatant;
}

export enum ModalText {
  player = 'Add Player',
  monster = 'Add Monster',
  npc = 'Add NPC',
  save = 'Save Current Party?',
  load = 'Load Saved Party?',
  clear = 'Clear All Combatants?',
  updateName = 'Update Combatant Name',
  updateType = 'Update Combatant Type',
  updateScore = 'Update Combatant Score',
}

export enum ModalContent {
  addCombatant = 'addCombatant',
  saveParty = 'saveParty',
  loadParty = 'loadParty',
  clearAll = 'clearAll',
  updateName = 'updateName',
  updateType = 'updateType',
  updateScore = 'updateScore',
}
