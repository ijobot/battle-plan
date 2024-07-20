import { Component, OnInit } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';
import { Combatant } from '../../models/combatant';
import { CommonModule } from '@angular/common';
import { CombatantRowComponent } from '../../components/combatant-row/combatant-row.component';
import { Observable } from 'rxjs';
import { CombatantCreationMenuComponent } from "../../components/combatant-creation-menu/combatant-creation-menu.component";

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [CommonModule, NavButtonsComponent, CombatantRowComponent, CombatantCreationMenuComponent, CombatantCreationMenuComponent],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss'
})
export class BattlefieldComponent implements OnInit {
  public combatants$!: Observable<Combatant[]>;

  constructor(private combatantService: CombatantService) {
  }

  ngOnInit(): void {
    this.combatants$ = this.combatantService.getCombatants();
  }
}
