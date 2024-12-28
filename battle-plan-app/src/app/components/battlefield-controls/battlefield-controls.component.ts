import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { CommonModule } from '@angular/common';
import { ColorScheme } from '../../models/color-scheme';
import { ModalText, ModalContent } from '../../models/modal';

@Component({
  selector: 'app-battlefield-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './battlefield-controls.component.html',
  styleUrl: './battlefield-controls.component.scss',
})
export class BattlefieldControlsComponent {
  public combatantType = ModalText;
  public colorScheme = ColorScheme;
  public savedParty$ = this.combatantService.savedParty$;

  constructor(
    private modalService: ModalService,
    private combatantService: CombatantService
  ) {}

  // Adding a combatant
  handleAddCombatantClick(type: ModalText, color: ColorScheme): void {
    this.modalService.setModalAppearance(
      type,
      color,
      ModalContent.addCombatant
    );
    this.modalService.openModal();
  }

  // Saving a party
  handleSavePartyClick(): void {
    this.modalService.setModalAppearance(
      ModalText.save,
      ColorScheme.default,
      ModalContent.saveParty
    );
    this.modalService.openModal();
  }

  // Loading a saved party
  handleLoadSavedPartyClick(): void {
    this.modalService.setModalAppearance(
      ModalText.load,
      ColorScheme.default,
      ModalContent.loadParty
    );
    this.modalService.openModal();
  }

  // Clearing the list
  handleClearAllClick(): void {
    this.modalService.setModalAppearance(
      ModalText.clear,
      ColorScheme.default,
      ModalContent.clearAll
    );
    this.modalService.openModal();
  }
}
