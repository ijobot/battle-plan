import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CSSTheme } from '../models/css-themes';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);

  currentTheme$ = new Observable<CSSTheme>();

  private _currentTheme$ = new BehaviorSubject<CSSTheme>(CSSTheme.fantasy);

  constructor() {
    this.currentTheme$ = this._currentTheme$.asObservable();
  }

  setTheme(theme: CSSTheme): void {
    const mainHTML = this.document.getElementById('app-root');

    if (mainHTML) {
      mainHTML.classList.remove(
        CSSTheme.default,
        CSSTheme.fantasy,
        CSSTheme.cyberpunk,
        CSSTheme.grimdark
      );
      mainHTML.classList.add(theme);
      this._currentTheme$.next(theme);
    }
  }
}
