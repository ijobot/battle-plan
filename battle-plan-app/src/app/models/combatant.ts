export interface Combatant {
    name: string;
    type: CombatantType;
    score: number;
}

export enum CombatantType {
    player = 'player',
    monster = 'monster',
    npc = 'npc'
}