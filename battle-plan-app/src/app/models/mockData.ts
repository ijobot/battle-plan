import { ColorScheme } from './color-scheme';
import { Combatant, CombatantType } from './combatant';

export const STARTING_COMBATANTS: Combatant[] = [
  {
    name: 'Pellius',
    type: CombatantType.player,
    score: 21,
    color: ColorScheme.player,
  },
  {
    name: 'Yellowblood',
    type: CombatantType.monster,
    score: 18,
    color: ColorScheme.monster,
  },
  {
    name: 'Capu',
    type: CombatantType.player,
    score: 16,
    color: ColorScheme.player,
  },
  {
    name: 'Zeja',
    type: CombatantType.npc,
    score: 10,
    color: ColorScheme.npc,
  },
  {
    name: 'Lapis',
    type: CombatantType.player,
    score: 4,
    color: ColorScheme.player,
  },
];
