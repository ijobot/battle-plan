import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.scss',
})
export class NavButtonsComponent {
  private router = inject(Router);

  @Input() buttonOneRoute: string = '';
  @Input() buttonTwoRoute: string = '';
  @Input() buttonOneText: string = '';
  @Input() buttonTwoText: string = '';

  navigate(to: string) {
    this.router.navigate([to]);
  }
}
