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
import { ColorScheme, CombatantType } from '../../models/combatant';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  combatantForm: FormGroup;

  modalColor!: ColorScheme;
  combatantType!: CombatantType;

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
    this.modalService.modalAppearance().subscribe((value) => {
      this.modalColor = value.color;
      this.combatantType = value.type;
    });
  }

  onSubmit(): void {
    if (this.combatantForm.valid) {
      this.combatantService.addCombatant(
        this.combatantType,
        this.modalColor,
        this.combatantForm.value.name as string,
        this.combatantForm.value.score as string
      );
      this.modalService.closeModal();
    }
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
