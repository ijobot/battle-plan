import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { Combatant, CombatantType } from '../../models/combatant';
import { Observable } from 'rxjs';
import { ModalText, ModalContent } from '../../models/modal';
import { CombatantEntryFormComponent } from '../combatant-entry-form/combatant-entry-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, CombatantEntryFormComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  private modalService = inject(ModalService);
  private combatantService = inject(CombatantService);

  modalAppearance$ = this.modalService.modalAppearance$;
  combatantType: CombatantType = CombatantType.default;
  modalText: ModalText = ModalText.clear;
  modalContent: ModalContent = ModalContent.clearAll;
  combatant?: Combatant;
  combatants$: Observable<Combatant[]> = this.combatantService.combatants$;

  handleCloseModal(): void {
    this.modalService.closeModal();
  }

  handleSaveAll(): void {
    this.combatantService.saveCurrentCombatants();
    this.modalService.closeModal();
  }

  handleLoadSavedParty(): void {
    this.combatantService.loadSavedCombatants();
    this.modalService.closeModal();
  }

  handleClearAll(): void {
    this.combatantService.clearAllCombatants();
    this.modalService.closeModal();
  }
}
