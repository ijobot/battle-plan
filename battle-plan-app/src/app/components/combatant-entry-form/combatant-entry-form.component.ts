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
import { MatSelectModule } from '@angular/material/select';
import { Utils } from '../../utils/utils';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-combatant-entry-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormFocusDirective,
    MatSelectModule,
    A11yModule,
  ],
  templateUrl: './combatant-entry-form.component.html',
  styleUrl: './combatant-entry-form.component.scss',
})
export class CombatantEntryFormComponent implements OnInit {
  private modalService = inject(ModalService);
  private combatantService = inject(CombatantService);

  @Input() colorScheme: ColorScheme = ColorScheme.player;
  @Input() modalText: ModalText = ModalText.player;
  @Input() updateAttribute?: string;

  combatant: Combatant | undefined = this.modalService.getCombatantToUpdate();
  selectOptions: CombatantType[] = [
    CombatantType.player,
    CombatantType.monster,
    CombatantType.npc,
  ];
  selection: CombatantType = CombatantType.player;
  selectionMade: boolean = false;

  combatantCreationForm: FormGroup;
  combatantUpdateForm: FormGroup;

  constructor() {
    this.combatantCreationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required]),
    });
    this.combatantUpdateForm = new FormGroup({
      updateName: new FormControl<string>(''),
      updateType: new FormControl<number>(0),
      updateScore: new FormControl<CombatantType>(CombatantType.player),
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

  ngOnInit(): void {
    // If updating, set the name, type, and score of the combatant
    this.combatantUpdateForm.controls['updateName'].setValue(
      this.combatant ? this.combatant.name : ''
    );
    this.populateTypeDropdown();
    this.combatantUpdateForm.controls['updateScore'].setValue(
      this.combatant ? this.combatant.score : ''
    );
  }

  onCreationSubmit(): void {
    // Configure combatantType based on modal's current text
    const combatantType = Utils.getTypeFromModalText(this.modalText);

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
      }

      if (this.updateAttribute == 'type') {
        this.combatantService.updateCombatant(
          this.combatant,
          this.updateAttribute,
          this.selection
        );
      }

      if (this.updateAttribute == 'score') {
        this.combatantService.updateCombatant(
          this.combatant,
          this.updateAttribute,
          this.updateScore?.value
        );
      }
      this.modalService.closeModal();
    }
  }

  populateTypeDropdown(): void {
    if (this.combatant) {
      const otherTypes = this.selectOptions.filter(
        (type) => type != this.combatant?.type
      );
      this.selectOptions = [this.combatant.type, otherTypes[0], otherTypes[1]];
    }
  }

  onSelection(value: string): void {
    this.selectionMade = true;
    this.selection = value as CombatantType;
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
