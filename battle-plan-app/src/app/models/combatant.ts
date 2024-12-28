import { ColorScheme } from './color-scheme';
import { ModalText } from './modal';

export interface Combatant {
  colorScheme: ColorScheme;
  type: ModalText;
  name: string;
  score: number;
}
