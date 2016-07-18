import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ClockService {
  currentTime: Observable<Date>;

  constructor() {
    this.currentTime = new BehaviorSubject<Date>(new Date())
      .merge(Observable.interval(100).map(() => new Date()));
  }
}

@Component({
  selector: 'my-clock',
  template: `{{currentTime | async}}`
})
export class ClockComponent implements OnInit {
  @Input()
  interval: number;

  currentTime: Observable<Date>;

  constructor(private clock: ClockService) {
  }

  ngOnInit() {
    this.currentTime = this.clock.currentTime.throttleTime(this.interval);
  }
}

// add another parameter to filter out rude messages
@Component({
  selector: 'my-motd',
  template: `{{message | async}}`
})
export class MOTDComponent implements OnInit {
  private messages = ['first', 'second', 'third', 'fourth', 'fifth'];
  private currentMessageIndex = 0;
  message: Observable<String>;

  constructor(private clock: ClockService) {
  }

  ngOnInit() {
    this.message = this.clock.currentTime
      .throttleTime(500)
      .map(x => this.messages[this.currentMessageIndex = ++this.currentMessageIndex % this.messages.length]);
  }
}

@Component({
  selector: 'my-clock-index',
  directives:  [ClockComponent, MOTDComponent],
  providers: [ClockService],
  template: `<my-clock interval="1000"></my-clock><br>
    <my-clock interval="5000"></my-clock><br>
    <my-motd></my-motd>`
})
export class ClockIndexComponent implements OnInit {
  ngOnInit() {
  }
}
