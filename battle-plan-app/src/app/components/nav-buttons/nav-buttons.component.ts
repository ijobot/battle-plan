import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.scss'
})
export class NavButtonsComponent {
  @Input() buttonOneRoute: string = '';
  @Input() buttonTwoRoute: string = '';
  @Input() buttonOneText: string = '';
  @Input() buttonTwoText: string = '';

  constructor(private router: Router) {}

  navigate(to: string) {
    this.router.navigate([to])
  }
}
