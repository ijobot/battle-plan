import { Component } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { CombatantType, ColorScheme } from '../../models/combatant';
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
  public ColorScheme = ColorScheme;

  constructor(
    private combatantService: CombatantService,
    private modalService: ModalService
  ) {}

  handleAddCombatant(type: CombatantType, color: ColorScheme): void {
    this.modalService.setModalAppearance(type, color);
    this.modalService.openModal();
  }

  handleClearAll(): void {
    this.combatantService.clearAllCombatants();
  }
}
