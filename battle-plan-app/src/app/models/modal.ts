import { ModalText, ColorScheme, ModalContent } from './combatant';

export interface ModalAppearance {
  type: ModalText;
  color: ColorScheme;
  contents: ModalContent;
}
