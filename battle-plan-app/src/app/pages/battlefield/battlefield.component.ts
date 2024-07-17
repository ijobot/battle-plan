import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battlefield',
  standalone: true,
  imports: [],
  templateUrl: './battlefield.component.html',
  styleUrl: './battlefield.component.scss'
})
export class BattlefieldComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/'])
  }

  goToAbout() {
    this.router.navigate(['/about'])
  }
}
