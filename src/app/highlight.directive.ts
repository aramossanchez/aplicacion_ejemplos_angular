import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.focus();
    el.nativeElement.style.backgroundColor = "yellow";
    el.nativeElement.style.width = "100%";
    el.nativeElement.style.padding = "2em 1.5em";
  }

}
