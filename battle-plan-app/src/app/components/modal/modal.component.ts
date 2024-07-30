import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(private modalService: ModalService) {}

  combatantForm = new FormGroup({
    name: new FormControl(''),
    score: new FormControl('0'),
  });

  handleCloseModal(): void {
    this.modalService.closeModal();
  }
}
