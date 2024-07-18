import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-combatant-row',
  standalone: true,
  imports: [],
  templateUrl: './combatant-row.component.html',
  styleUrl: './combatant-row.component.scss'
})
export class CombatantRowComponent {
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() score: number = 0;
}
