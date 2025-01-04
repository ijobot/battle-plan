import { ColorScheme } from '../models/color-scheme';
import { CombatantType } from '../models/combatant';
import { ModalText } from '../models/modal';

export class Utils {
  static getColorSchemeFromType(type: CombatantType): ColorScheme {
    switch (type) {
      case CombatantType.monster:
        return ColorScheme.monster;
      case CombatantType.npc:
        return ColorScheme.npc;
      default:
        return ColorScheme.player;
    }
  }

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
