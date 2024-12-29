import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Combatant } from '../../models/combatant';
import { CombatantService } from '../../services/combatant.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ModalContent, ModalText } from '../../models/modal';

@Component({
  selector: 'app-combatant-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './combatant-row.component.html',
  styleUrl: './combatant-row.component.scss',
})
export class CombatantRowComponent {
  @Input() combatant: Combatant = {} as Combatant;
  @Input() index: number = 0;
  modalText = ModalText;
  modalContent = ModalContent;

  constructor(
    private combatantService: CombatantService,
    private modalService: ModalService
  ) {}

  getRowAndButtonColor(): Partial<CSSStyleDeclaration> {
    const bgColor = { 'background-color': this.combatant.colorScheme };
    return bgColor;
  }

  // Clicking the X button on a row
  handleRemoveCombatant(index: number): void {
    this.combatantService.removeCombatant(index);
  }

  // Clicking any attribute button on a row
  handleUpdateCombatant(
    updateAttribute: ModalText,
    modalContent: ModalContent
  ): void {
    this.modalService.setModalAppearance(
      this.combatant.colorScheme,
      updateAttribute,
      modalContent
    );
    this.modalService.openModal();
  }
}
