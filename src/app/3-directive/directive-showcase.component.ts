import { Component, OnInit } from '@angular/core';
import { MyHelloWorldDirective } from './1-hello-world.directive';

@Component({
  selector: 'my-directive-showcase',
  templateUrl: './directive-showcase.component.html',
  styles: ['.hidden { display: none }'],
  directives: [MyHelloWorldDirective]
})
export class DirectiveShowcaseComponent implements OnInit {
  ngOnInit() {
  }
}
