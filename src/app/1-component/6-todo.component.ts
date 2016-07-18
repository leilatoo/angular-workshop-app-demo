import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-todo-item',
  template: `<div (click)="remove()">{{item.text}}</div>`
})
export class TodoItemComponent implements OnInit {
  @Input()
  item: any;

  @Output()
  itemRemoved = new EventEmitter();

  remove() {
    this.itemRemoved.next(this.item.id);
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'my-todo',
  directives: [TodoItemComponent],
  template: `<my-todo-item *ngFor="let item of items" [item]="item" (itemRemoved)="remove($event)"></my-todo-item>`
})
export class TodoComponent implements OnInit {
  items: any[];

  constructor() {
    this.items = [
      { id: 0, text: 'Do this first' },
      { id: 1, text: 'Do that second' },
      { id: 2, text: 'Do this third' },
      { id: 3, text: 'Do that fourth' },
      { id: 4, text: 'Do this fifth' },
      { id: 5, text: 'Do that sixth' }
    ];
  }

  remove(idToRemove) {
    this.items = this.items.filter(item => item.id !== idToRemove);
  }

  ngOnInit() {
  }
}
