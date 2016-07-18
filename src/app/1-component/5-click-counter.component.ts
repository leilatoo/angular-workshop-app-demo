import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-click-counter',
  templateUrl: './5-click-counter.component.html'
})
export class ClickCounterComponent implements OnInit {
  times: number;

  constructor() {
    this.times = 0;
  }

  count(): void {
    this.times++;
  }

  ngOnInit() {
  }
}
