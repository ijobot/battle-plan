import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
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
  private modalService = inject(ModalService);
  private combatantService = inject(CombatantService);

  @Input() colorScheme: ColorScheme = ColorScheme.player;
  @Input() modalText: ModalText = ModalText.player;
  @Input() index?: number;
  @Input() update?: boolean;
  @Input() updateType?: string;

  combatantCreationForm: FormGroup;
  combatantUpdateForm: FormGroup;

  constructor() {
    this.combatantCreationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required]),
    });
    this.combatantUpdateForm = new FormGroup({
      updateName: new FormControl(''),
      updateScore: new FormControl(''),
    });
  }

  get name() {
    return this.combatantCreationForm.get('name');
  }

  get score() {
    return this.combatantCreationForm.get('score');
  }

  get updateName() {
    return this.combatantUpdateForm.get('updateName');
  }

  get updateScore() {
    return this.combatantUpdateForm.get('updateScore');
  }

  onCreationSubmit(): void {
    // Configure combatantType based on modal's current text
    let combatantType =
      this.modalText == 'Add Player'
        ? CombatantType.player
        : this.modalText == 'Add Monster'
        ? CombatantType.monster
        : CombatantType.npc;

    if (this.combatantCreationForm.valid) {
      this.combatantService.addCombatant(
        this.colorScheme,
        combatantType,
        this.combatantCreationForm.value.name,
        this.combatantCreationForm.value.score
      );
      this.modalService.closeModal();
    }
  }

  onUpdateSubmit(): void {
    if (
      this.combatantUpdateForm.value.updateName &&
      this.update &&
      this.updateType == 'name'
    ) {
      this.combatantService.updateCombatant(0, 'name', this.updateName?.value);
      this.modalService.closeModal();
    }

    if (
      this.combatantUpdateForm.value.updateScore &&
      this.update &&
      this.updateType == 'score'
    ) {
      this.combatantService.updateCombatant(
        0,
        'score',
        this.updateScore?.value
      );
      this.modalService.closeModal();
    }
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
