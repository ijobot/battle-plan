import { ColorScheme } from '../models/color-scheme';
import { CombatantType } from '../models/combatant';

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
}
