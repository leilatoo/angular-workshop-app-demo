import { Directive, ElementRef, HostListener, Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToggleService {
  private toggler = new Subject<string>();
  toggler$ = this.toggler.asObservable();

  toggle(what: string) {
    this.toggler.next(what);
  }
}

@Directive({
  selector: '[myToggleable]'
})
export class MyToggleableDirective {
  @Input('myToggleable')
  myToggleable: string;

  constructor(private toggleService: ToggleService, el: ElementRef) {
    toggleService.toggler$.subscribe(m => {
      if (this.myToggleable === m) {
        el.nativeElement.classList.toggle('hidden');
      }
    });
  }
}

@Directive({
  selector: '[myToggle]'
})
export class MyToggleDirective {
  @Input('myToggle')
  myToggle: string;

  constructor(private toggleService: ToggleService) {
  }

  @HostListener('click')
  toggle() {
    this.toggleService.toggle(this.myToggle);
  }
}
