import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ModalAppearance } from '../../models/modal';
import { Observable } from 'rxjs';
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
    score: new FormControl('0'),
  });

  modalAppearance$!: Observable<ModalAppearance>;

  constructor(
    private modalService: ModalService,
    private combatantService: CombatantService
  ) {}

  ngOnInit(): void {
    this.modalAppearance$ = this.modalService.modalAppearance();
  }

  onSubmit(): void {
    console.log(this.combatantForm.value);
    this.combatantService.addCombatant(
      CombatantType.monster,
      ColorScheme.monster,
      this.combatantForm.value.name as string,
      this.combatantForm.value.score as string
    );
    this.modalService.closeModal();
  }

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
