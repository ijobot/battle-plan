export interface Combatant {
    color: string;
    name: string;
    type: CombatantType;
    score: number | string;
}

export enum CombatantType {
    player = 'Player',
    monster = 'Monster',
    npc = 'NPC'
}

export enum CombatantColor {
    player = '#2bb78d',
    monster = '#df5858',
    npc = '#5986da'
}