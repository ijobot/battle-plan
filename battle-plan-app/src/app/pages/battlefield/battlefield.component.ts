import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';
import { CombatantListComponent } from '../../components/combatant-list/combatant-list.component';
import { BattlefieldControlsComponent } from '../../components/battlefield-controls/battlefield-controls.component';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [
    CommonModule,
    BattlefieldControlsComponent,
    CombatantListComponent,
    ModalComponent,
  ],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss',
})
export class BattlefieldComponent {
  showModal$: Observable<boolean> = this.modalService.modal$;

  constructor(private modalService: ModalService, private router: Router) {}

  navigate(to: string) {
    this.router.navigate([to]);
  }
}
