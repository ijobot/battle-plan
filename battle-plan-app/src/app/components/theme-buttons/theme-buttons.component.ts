import { Component, inject } from '@angular/core';
import { CSSTheme } from '../../models/css-themes';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-buttons',
  standalone: true,
  imports: [],
  templateUrl: './theme-buttons.component.html',
  styleUrl: './theme-buttons.component.scss',
})
export class ThemeButtonsComponent {
  private themeService = inject(ThemeService);

  theme = CSSTheme;

  handleThemeSelection(theme: CSSTheme): void {
    this.themeService.setTheme(theme);
  }
}
