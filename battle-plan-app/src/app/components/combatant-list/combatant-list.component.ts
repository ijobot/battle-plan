import { Component, inject } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { CombatantRowComponent } from '../combatant-row/combatant-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combatant-list',
  standalone: true,
  imports: [CommonModule, CombatantRowComponent],
  templateUrl: './combatant-list.component.html',
  styleUrl: './combatant-list.component.scss',
})
export class CombatantListComponent {
  private combatantService = inject(CombatantService);

  combatants$ = this.combatantService.combatants$;
}
