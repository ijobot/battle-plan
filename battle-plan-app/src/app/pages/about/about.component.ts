import { Component } from '@angular/core';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavButtonsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor() {}
}
