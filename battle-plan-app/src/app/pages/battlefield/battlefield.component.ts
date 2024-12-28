import { Component, OnInit } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { Combatant } from '../../models/combatant';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { CombatantCreationMenuComponent } from '../../components/combatant-creation-menu/combatant-creation-menu.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';
import { CombatantListComponent } from '../../components/combatant-list/combatant-list.component';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [
    CommonModule,
    CombatantCreationMenuComponent,
    CombatantCreationMenuComponent,
    ModalComponent,
    CombatantListComponent,
  ],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss',
})
export class BattlefieldComponent implements OnInit {
  showModal$: Observable<boolean> = of(false);

  constructor(private modalService: ModalService, private router: Router) {}

  ngOnInit(): void {
    this.showModal$ = this.modalService.modal$;
  }

  navigate(to: string) {
    this.router.navigate([to]);
  }
}
