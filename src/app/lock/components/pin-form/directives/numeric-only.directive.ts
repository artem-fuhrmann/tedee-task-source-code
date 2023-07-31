import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]'
})
export class NumericOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    const inputValue = inputElement.value;
    const sanitizedValue = this.sanitizeInput(inputValue);
    if (inputValue !== sanitizedValue) {
      inputElement.value = sanitizedValue;
      inputElement.dispatchEvent(new Event('input'));
    }
  }

  private sanitizeInput(value: string): string {
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    return sanitizedValue;
  }

}