import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Combatant } from '../../models/combatant';
import { CombatantService } from '../../services/combatant.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ModalContent, ModalText } from '../../models/modal';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-combatant-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './combatant-row.component.html',
  styleUrl: './combatant-row.component.scss',
})
export class CombatantRowComponent {
  private combatantService = inject(CombatantService);
  private modalService = inject(ModalService);

  @Input() combatant: Combatant = {} as Combatant;
  @Input() index: number = 0;

  modalText = ModalText;
  modalContent = ModalContent;
  initiative$ = this.combatantService.initiative$;

  // getRowAndButtonColor(): Partial<CSSStyleDeclaration> {
  //   const bgColor = {
  //     'background-color': Utils.getColorSchemeFromType(this.combatant.type),
  //   };
  //   return bgColor;
  // }

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
      this.combatant.type,
      updateAttribute,
      modalContent,
      this.combatant
    );
    this.modalService.openModal();
  }
}
