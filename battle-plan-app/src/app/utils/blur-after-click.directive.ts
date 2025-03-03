import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blurAfterClick]',
  standalone: true,
})
export class BlurAfterClickDirective {
  constructor(private _elementRef: ElementRef) {}

  @HostListener('click') onClick() {
    this._elementRef.nativeElement.blur();
  }
}
