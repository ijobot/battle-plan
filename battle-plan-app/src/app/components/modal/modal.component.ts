import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CombatantService } from '../../services/combatant.service';
import { Combatant } from '../../models/combatant';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { ColorScheme } from '../../models/color-scheme';
import { ModalText, ModalContent } from '../../models/modal';
import { CombatantEntryFormComponent } from '../combatant-entry-form/combatant-entry-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, CombatantEntryFormComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit, OnDestroy {
  private modalService = inject(ModalService);
  private combatantService = inject(CombatantService);

  private readonly destroy$ = new Subject<boolean>();

  colorScheme: ColorScheme = ColorScheme.default;
  modalText: ModalText = ModalText.clear;
  modalContent: ModalContent = ModalContent.clearAll;
  combatant?: Combatant;
  combatants$: Observable<Combatant[]> = this.combatantService.combatants$;

  ngOnInit(): void {
    this.modalService.modalAppearance$
      .pipe(
        takeUntil(this.destroy$),
        map(({ colorScheme, modalText, modalContent, combatant }) => {
          this.colorScheme = colorScheme;
          this.modalText = modalText;
          this.modalContent = modalContent;
          this.combatant = combatant;
        })
      )
      .subscribe();
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
