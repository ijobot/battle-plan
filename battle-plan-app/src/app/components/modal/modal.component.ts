import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { CombatantService } from '../../services/combatant.service';
import {
  ColorScheme,
  ModalText,
  ModalContent,
  Combatant,
} from '../../models/combatant';
import { FormFocusDirective } from '../../utils/autofocus.directive';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormFocusDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  combatantForm: FormGroup;

  colorScheme: ColorScheme = ColorScheme.default;
  modalText: ModalText = ModalText.clear;
  modalContent: ModalContent = ModalContent.clearAll;
  public combatants$: Observable<Combatant[]> =
    this.combatantService.combatants$;

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

  ngOnInit(): void {
    this.modalService.modalAppearance$
      .pipe(
        map(({ colorScheme, modalText, modalContent }) => {
          this.colorScheme = colorScheme;
          this.modalText = modalText;
          this.modalContent = modalContent;
        })
      )
      .subscribe();
  }

  onSubmit(): void {
    if (this.combatantForm.valid) {
      this.combatantService.addCombatant(
        this.modalText,
        this.combatantForm.value.name,
        this.combatantForm.value.score
      );
      this.modalService.closeModal();
    }
  }

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
