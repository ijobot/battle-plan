import { Component, inject } from '@angular/core';
import { CSSTheme } from '../../models/css-themes';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selection',
  standalone: true,
  imports: [],
  templateUrl: './theme-selection.component.html',
  styleUrl: './theme-selection.component.scss',
})
export class ThemeSelectionComponent {
  private themeService = inject(ThemeService);

  theme = CSSTheme;

  handleThemeSelection(theme: CSSTheme): void {
    this.themeService.setTheme(theme);
  }
}
