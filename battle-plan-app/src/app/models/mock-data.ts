import { Combatant, CombatantType } from './combatant';

export const STARTING_COMBATANTS: Combatant[] = [
  {
    name: 'Pellius',
    type: CombatantType.player,
    score: 21,
  },
  {
    name: 'Yellowblood',
    type: CombatantType.monster,
    score: 18,
  },
  {
    name: 'Capu',
    type: CombatantType.player,
    score: 16,
  },
  {
    name: 'Zeja',
    type: CombatantType.npc,
    score: 10,
  },
  {
    name: 'Lapis',
    type: CombatantType.player,
    score: 4,
  },
];
