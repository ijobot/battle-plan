import { Component, OnInit } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';
import { Combatant } from '../../models/combatant';
import { CommonModule } from '@angular/common';
import { CombatantRowComponent } from '../../components/combatant-row/combatant-row.component';
import { Observable } from 'rxjs';
import { CombatantCreationMenuComponent } from '../../components/combatant-creation-menu/combatant-creation-menu.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [
    CommonModule,
    NavButtonsComponent,
    CombatantRowComponent,
    CombatantCreationMenuComponent,
    CombatantCreationMenuComponent,
    ModalComponent,
  ],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss',
})
export class BattlefieldComponent implements OnInit {
  combatants$!: Observable<Combatant[]>;
  showModal$!: Observable<boolean>;

  constructor(
    private combatantService: CombatantService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.combatants$ = this.combatantService.getCombatants();
    this.showModal$ = this.modalService.modalState();
  }
}
