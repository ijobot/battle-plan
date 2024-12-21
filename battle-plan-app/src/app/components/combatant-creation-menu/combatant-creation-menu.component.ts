import { Component } from '@angular/core';
import {
  CombatantType,
  ColorScheme,
  ContentType,
} from '../../models/combatant';
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

  constructor(private modalService: ModalService) {}

  handleAddCombatant(type: CombatantType, color: ColorScheme): void {
    this.modalService.setModalAppearance(type, color, ContentType.addCombatant);
    this.modalService.openModal();
  }

  handleSaveParty(): void {
    this.modalService.setModalAppearance(
      CombatantType.save,
      ColorScheme.default,
      ContentType.saveParty
    );
    this.modalService.openModal();
  }

  handleLoadSavedParty(): void {
    this.modalService.setModalAppearance(
      CombatantType.load,
      ColorScheme.default,
      ContentType.loadParty
    );
    this.modalService.openModal();
  }

  handleClearAll(): void {
    this.modalService.setModalAppearance(
      CombatantType.clear,
      ColorScheme.default,
      ContentType.clearAll
    );
    this.modalService.openModal();
  }
}
