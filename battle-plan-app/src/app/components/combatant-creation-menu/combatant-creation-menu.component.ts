import { Component } from '@angular/core';
import {
  ModalText,
  ColorScheme,
  ModalContent,
  Combatant,
} from '../../models/combatant';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-combatant-creation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combatant-creation-menu.component.html',
  styleUrl: './combatant-creation-menu.component.scss',
})
export class CombatantCreationMenuComponent {
  public combatantType = ModalText;
  public ColorScheme = ColorScheme;
  public savedParty: boolean = false;

  constructor(
    private modalService: ModalService,
    private combatantService: CombatantService
  ) {
    this.combatantService.savedParty$
      .pipe(
        tap((value) => {
          if (value.length) this.savedParty = true;
        })
      )
      .subscribe();
  }

  handleAddCombatant(type: ModalText, color: ColorScheme): void {
    this.modalService.setModalAppearance(
      type,
      color,
      ModalContent.addCombatant
    );
    this.modalService.openModal();
  }

  handleSaveParty(): void {
    this.modalService.setModalAppearance(
      ModalText.save,
      ColorScheme.default,
      ModalContent.saveParty
    );
    this.modalService.openModal();
  }

  handleLoadSavedParty(): void {
    console.log('hey joe from CCM', this.savedParty);
    this.modalService.setModalAppearance(
      ModalText.load,
      ColorScheme.default,
      ModalContent.loadParty
    );
    this.modalService.openModal();
  }

  handleClearAll(): void {
    this.modalService.setModalAppearance(
      ModalText.clear,
      ColorScheme.default,
      ModalContent.clearAll
    );
    this.modalService.openModal();
  }
}
