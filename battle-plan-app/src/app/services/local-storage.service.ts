import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Combatant } from '../models/combatant';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly platformId = inject(PLATFORM_ID);

  checkLocalStorage(): Combatant[] {
    const savedParty = this.getData('Saved Party');
    if (savedParty) {
      return JSON.parse(savedParty);
    } else {
      return [];
    }
  }

  saveData(key: string, value: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  getData(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    } else {
      return '';
    }
  }

  clearData() {
    localStorage.clear();
  }
}
