import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router) {}

  goToBattleField() {
    this.router.navigate(['/battlefield'])
  }

  goToHome() {
    this.router.navigate(['/'])
  }
}
