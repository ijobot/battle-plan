import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { CombatantListComponent } from '../../components/combatant-list/combatant-list.component';
import { BattlefieldControlsComponent } from '../../components/battlefield-controls/battlefield-controls.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [
    CommonModule,
    BattlefieldControlsComponent,
    CombatantListComponent,
    ModalComponent,
    NavbarComponent,
  ],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss',
})
export class BattlefieldComponent {
  private modalService = inject(ModalService);

  showModal$: Observable<boolean> = this.modalService.modal$;
}
