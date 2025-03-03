import { Component } from '@angular/core';
import { ThemeSelectionComponent } from '../theme-selection/theme-selection.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../utils/clickoutside.directive';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, ThemeSelectionComponent, ClickOutsideDirective],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}
