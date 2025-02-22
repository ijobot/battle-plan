import { Component } from '@angular/core';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';
import { ThemeButtonsComponent } from '../../components/theme-buttons/theme-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonsComponent, ThemeButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
