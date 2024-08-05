import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ModalAppearance } from '../../models/modal';
import { Observable, tap } from 'rxjs';
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
  combatantForm = new FormGroup({
    name: new FormControl(''),
    score: new FormControl(''),
  });

  modalColor!: ColorScheme;
  combatantType!: CombatantType;

  constructor(
    private modalService: ModalService,
    private combatantService: CombatantService
  ) {}

  ngOnInit(): void {
    this.modalService.modalAppearance().subscribe((value) => {
      this.modalColor = value.color;
      this.combatantType = value.type;
    });
  }

  onSubmit(): void {
    this.combatantService.addCombatant(
      this.combatantType,
      this.modalColor,
      this.combatantForm.value.name as string,
      this.combatantForm.value.score as string
    );
    this.modalService.closeModal();
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}