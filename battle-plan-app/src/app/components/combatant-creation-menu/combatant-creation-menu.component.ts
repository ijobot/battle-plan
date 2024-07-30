import { Component } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { CombatantType, CombatantColor } from '../../models/combatant';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-combatant-creation-menu',
  standalone: true,
  imports: [],
  templateUrl: './combatant-creation-menu.component.html',
  styleUrl: './combatant-creation-menu.component.scss',
})
export class CombatantCreationMenuComponent {
  public combatantType = CombatantType;
  public combatantColor = CombatantColor;

  constructor(
    private combatantService: CombatantService,
    private modalService: ModalService
  ) {}

  handleAddCombatant(type: CombatantType, rowColor: CombatantColor): void {
    this.modalService.openModal();
    this.combatantService.addCombatant(type, rowColor);
  }

  handleClearAll(): void {
    this.combatantService.clearAllCombatants();
  }
}
