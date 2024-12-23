import { Component } from '@angular/core';
import { ModalText, ColorScheme, ModalContent } from '../../models/combatant';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combatant-creation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combatant-creation-menu.component.html',
  styleUrl: './combatant-creation-menu.component.scss',
})
export class CombatantCreationMenuComponent {
  public combatantType = ModalText;
  public colorScheme = ColorScheme;
  public savedParty$ = this.combatantService.savedParty$;

  constructor(
    private modalService: ModalService,
    private combatantService: CombatantService
  ) {}

  handleAddCombatantClick(type: ModalText, color: ColorScheme): void {
    this.modalService.setModalAppearance(
      type,
      color,
      ModalContent.addCombatant
    );
    this.modalService.openModal();
  }

  handleSavePartyClick(): void {
    this.modalService.setModalAppearance(
      ModalText.save,
      ColorScheme.default,
      ModalContent.saveParty
    );
    this.modalService.openModal();
  }

  handleLoadSavedPartyClick(): void {
    this.modalService.setModalAppearance(
      ModalText.load,
      ColorScheme.default,
      ModalContent.loadParty
    );
    this.modalService.openModal();
  }

  handleClearAllClick(): void {
    this.modalService.setModalAppearance(
      ModalText.clear,
      ColorScheme.default,
      ModalContent.clearAll
    );
    this.modalService.openModal();
  }
}
