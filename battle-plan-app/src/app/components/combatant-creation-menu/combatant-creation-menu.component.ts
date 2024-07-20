import { Component } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { CombatantType, CombatantColor } from '../../models/combatant';

@Component({
  selector: 'app-combatant-creation-menu',
  standalone: true,
  imports: [],
  templateUrl: './combatant-creation-menu.component.html',
  styleUrl: './combatant-creation-menu.component.scss'
})
export class CombatantCreationMenuComponent {
  public combatantType = CombatantType;
  public combatantColor = CombatantColor;

  constructor(private combatantService: CombatantService) {}

  handleAddCombatant(type: CombatantType, rowColor: CombatantColor): void {
    this.combatantService.addCombatant(type, rowColor);
  }

  handleClearAll(): void {
    this.combatantService.clearAllCombatants();
  }
}
