import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { CommonModule } from '@angular/common';
import { ModalContent, ModalText } from '../../models/modal';
import { CombatantType } from '../../models/combatant';

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

  combatantType = CombatantType;
  modalText = ModalText;
  savedParty$ = this.combatantService.savedParty$;
  initiative$ = this.combatantService.initiative$;

  // Adding a combatant
  handleAddCombatantClick(type: CombatantType, modalText: ModalText): void {
    this.modalService.setModalAppearance(
      type,
      modalText,
      ModalContent.addCombatant
    );
    this.modalService.openModal();
  }

  handleToggleInitiative(): void {
    this.combatantService.toggleInitiative();
  }

  // Saving a party
  handleSavePartyClick(): void {
    this.modalService.setModalAppearance(
      CombatantType.player,
      ModalText.save,
      ModalContent.saveParty
    );
    this.modalService.openModal();
  }

  // Loading a saved party
  handleLoadSavedPartyClick(): void {
    this.modalService.setModalAppearance(
      CombatantType.player,
      ModalText.load,
      ModalContent.loadParty
    );
    this.modalService.openModal();
  }

  // Clearing the list
  handleClearAllClick(): void {
    this.modalService.setModalAppearance(
      CombatantType.player,
      ModalText.clear,
      ModalContent.clearAll
    );
    this.modalService.openModal();
  }
}
