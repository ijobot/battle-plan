import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
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
import { Combatant, CombatantType } from '../../models/combatant';

@Component({
  selector: 'app-combatant-entry-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormFocusDirective],
  templateUrl: './combatant-entry-form.component.html',
  styleUrl: './combatant-entry-form.component.scss',
})
export class CombatantEntryFormComponent implements OnInit {
  private modalService = inject(ModalService);
  private combatantService = inject(CombatantService);

  @Input() colorScheme: ColorScheme = ColorScheme.player;
  @Input() modalText: ModalText = ModalText.player;
  @Input() update?: boolean;
  @Input() updateAttribute?: string;

  combatant?: Combatant = this.modalService.getCombatantToUpdate();
  combatantCreationForm: FormGroup;
  combatantUpdateForm: FormGroup;

  constructor() {
    this.combatantCreationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required]),
    });
    this.combatantUpdateForm = new FormGroup({
      updateName: new FormControl(''),
      updateType: new FormControl(''),
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

  get updateType() {
    return this.combatantUpdateForm.get('updateType');
  }

  get updateScore() {
    return this.combatantUpdateForm.get('updateScore');
  }

  ngOnInit(): void {
    this.combatantUpdateForm.controls['updateName'].setValue(
      this.combatant?.name
    );
    this.combatantUpdateForm.controls['updateScore'].setValue(
      this.combatant?.score
    );
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
        combatantType,
        this.combatantCreationForm.value.name,
        this.combatantCreationForm.value.score
      );
      this.modalService.closeModal();
    }
  }

  onUpdateSubmit(): void {
    if (this.combatant) {
      if (this.updateAttribute == 'name') {
        this.combatantService.updateCombatant(
          this.combatant,
          this.updateAttribute,
          this.updateName?.value
        );
        this.modalService.closeModal();
      }

      if (this.updateAttribute == 'type') {
        this.combatantService.updateCombatant(
          this.combatant,
          this.updateAttribute,
          this.updateType?.value
        );

        this.modalService.closeModal();
      }

      if (this.updateAttribute == 'score') {
        this.combatantService.updateCombatant(
          this.combatant,
          this.updateAttribute,
          this.updateScore?.value
        );
        this.modalService.closeModal();
      }
    }
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
