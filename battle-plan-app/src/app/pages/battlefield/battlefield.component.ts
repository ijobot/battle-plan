import { Component, OnInit } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { Combatant } from '../../models/combatant';
import { CommonModule } from '@angular/common';
import { CombatantRowComponent } from '../../components/combatant-row/combatant-row.component';
import { Observable, of } from 'rxjs';
import { CombatantCreationMenuComponent } from '../../components/combatant-creation-menu/combatant-creation-menu.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [
    CommonModule,
    CombatantRowComponent,
    CombatantCreationMenuComponent,
    CombatantCreationMenuComponent,
    ModalComponent,
  ],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss',
})
export class BattlefieldComponent implements OnInit {
  combatants$: Observable<Combatant[]> = of([]);
  showModal$: Observable<boolean> = of(false);

  constructor(
    private combatantService: CombatantService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.combatants$ = this.combatantService.combatants$;
    this.showModal$ = this.modalService.modal$;
  }

  navigate(to: string) {
    this.router.navigate([to]);
  }
}
