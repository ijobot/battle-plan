import { CombatantType } from '../models/combatant';
import { ModalText } from '../models/modal';

export class Utils {
  static getTypeFromModalText(modalText: ModalText): CombatantType {
    switch (modalText) {
      case ModalText.monster:
        return CombatantType.monster;
      case ModalText.npc:
        return CombatantType.npc;
      default:
        return CombatantType.player;
    }
  }
}
