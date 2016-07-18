import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-hello-world',
  template: '<div>Hello {{name}}!</div>'
})
export class HelloWorldComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'World';
  }

  ngOnInit() {
  }
}
