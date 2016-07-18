import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHelloWorld]'
})
export class MyHelloWorldDirective {
  @Input('myHelloWorld')
  myHelloWorld: string;

  constructor(el: ElementRef) {
  }

  @HostListener('click')
  greet() {
    alert(this.myHelloWorld);
  }
}
