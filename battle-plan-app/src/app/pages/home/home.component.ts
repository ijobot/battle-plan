import { Component } from '@angular/core';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
