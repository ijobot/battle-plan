import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[formFocus]',
})
export class FormFocusDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }
}
