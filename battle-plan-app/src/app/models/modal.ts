import { CombatantType, ColorScheme, ContentType } from './combatant';

export interface ModalAppearance {
  type: CombatantType;
  color: ColorScheme;
  contents: ContentType;
}
