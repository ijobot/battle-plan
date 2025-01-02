import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFocusDirective } from '../../utils/autofocus.directive';
import { CombatantService } from '../../services/combatant.service';
import { ModalService } from '../../services/modal.service';
import { ColorScheme } from '../../models/color-scheme';
import { ModalText } from '../../models/modal';
import { CombatantType } from '../../models/combatant';

@Component({
  selector: 'app-combatant-entry-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormFocusDirective],
  templateUrl: './combatant-entry-form.component.html',
  styleUrl: './combatant-entry-form.component.scss',
})
export class CombatantEntryFormComponent {
  @Input() colorScheme: ColorScheme = ColorScheme.player;
  @Input() modalText: ModalText = ModalText.player;
  @Input() index?: number;
  @Input() update?: boolean;
  @Input() updateType?: string;
  combatantForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private combatantService: CombatantService
  ) {
    this.combatantForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.combatantForm.get('name');
  }

  get score() {
    return this.combatantForm.get('score');
  }

  onSubmit(): void {
    // Configure combatantType based on modal's current text
    let combatantType =
      this.modalText == 'Add Player'
        ? CombatantType.player
        : this.modalText == 'Add Monster'
        ? CombatantType.monster
        : CombatantType.npc;

    if (this.combatantForm.valid) {
      this.combatantService.addCombatant(
        this.colorScheme,
        combatantType,
        this.combatantForm.value.name,
        this.combatantForm.value.score
      );
      this.modalService.closeModal();
    }

    if (
      this.combatantForm.value.name &&
      this.update &&
      this.updateType == 'name'
    ) {
      this.combatantService.updateCombatant(0, 'name', this.name?.value);
      this.modalService.closeModal();
    }

    if (
      this.combatantForm.value.score &&
      this.update &&
      this.updateType == 'score'
    ) {
      this.combatantService.updateCombatant(0, 'score', this.score?.value);
      this.modalService.closeModal();
    }
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
