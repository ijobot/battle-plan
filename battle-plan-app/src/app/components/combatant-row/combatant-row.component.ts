import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Combatant } from '../../models/combatant';
import { CombatantService } from '../../services/combatant.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-combatant-row',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './combatant-row.component.html',
  styleUrl: './combatant-row.component.scss',
})
export class CombatantRowComponent {
  @Input() combatant: Combatant = {} as Combatant;
  @Input() index: number = 0;

  constructor(private combatantService: CombatantService) {}

  handleRemoveCombatant(index: number): void {
    this.combatantService.removeCombatant(index);
  }
}
