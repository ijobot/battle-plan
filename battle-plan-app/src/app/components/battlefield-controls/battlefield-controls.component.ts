import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { CommonModule } from '@angular/common';
import { ColorScheme } from '../../models/color-scheme';
import { ModalContent, ModalText } from '../../models/modal';

@Component({
  selector: 'app-battlefield-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './battlefield-controls.component.html',
  styleUrl: './battlefield-controls.component.scss',
})
export class BattlefieldControlsComponent {
  private modalService = inject(ModalService);
  private combatantService = inject(CombatantService);

  colorScheme = ColorScheme;
  modalText = ModalText;
  savedParty$ = this.combatantService.savedParty$;

  // Adding a combatant
  handleAddCombatantClick(color: ColorScheme, type: ModalText): void {
    this.modalService.setModalAppearance(
      color,
      type,
      ModalContent.addCombatant
    );
    this.modalService.openModal();
  }

  // Saving a party
  handleSavePartyClick(): void {
    this.modalService.setModalAppearance(
      ColorScheme.default,
      ModalText.save,
      ModalContent.saveParty
    );
    this.modalService.openModal();
  }

  // Loading a saved party
  handleLoadSavedPartyClick(): void {
    this.modalService.setModalAppearance(
      ColorScheme.default,
      ModalText.load,
      ModalContent.loadParty
    );
    this.modalService.openModal();
  }

  // Clearing the list
  handleClearAllClick(): void {
    this.modalService.setModalAppearance(
      ColorScheme.default,
      ModalText.clear,
      ModalContent.clearAll
    );
    this.modalService.openModal();
  }
}
