import {Directive, ElementRef, Input} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTippy]',
})
export class TippyDirective {
  @Input() appTippy = '';

  constructor(private el: ElementRef) {
    this.el = el;
  }

  public ngOnInit() {
    tippy(this.el.nativeElement, {
      arrow: false,
      content: this.appTippy,
      placement: "bottom",
      theme: "senta",
    });
  }
}
