import { Component, OnInit } from '@angular/core';
import { CombatantService } from '../../services/combatant.service';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';
import { Combatant } from '../../models/combatant';
import { CommonModule } from '@angular/common';
import { CombatantRowComponent } from '../../components/combatant-row/combatant-row.component';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [CommonModule, NavButtonsComponent, CombatantRowComponent],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss'
})
export class BattlefieldComponent implements OnInit {
  public combatants: Combatant[] = [];

  constructor(private combatantService: CombatantService) {}

  ngOnInit(): void {
    this.combatantService.getCombatants().subscribe(data => this.combatants = data)
    console.log('hey joe combatants', this.combatants)
  }
}
