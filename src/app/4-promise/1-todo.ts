import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Todo1Service {
  constructor(private http: Http) {
  }

  getTodos(): Promise<Response> {
    return this.http.get('data/todo.json')
      .toPromise();
  }

  getTodos2(): Promise<any[]> {
    return this.http.get('data/todo.json')
      .toPromise()
      .then(response => response.json());
  }
}

@Component({
  selector: 'my-todo',
  providers: [Todo1Service],
  template: `<h1>Attempt 1</h1>
    <div *ngFor="let todo of todos1">{{todo.id}}. {{todo.text}}</div>
    <h2>Attempt 2</h2>
    <div *ngFor="let todo of todos2">{{todo.id}}. {{todo.text}}</div>
    <h2>Attempt 3</h2>
    <div *ngFor="let todo of todos3 | async">{{todo.id}}. {{todo.text}}</div>
  `
})
export class Todo1Component implements OnInit {
  todos1: any[];
  todos2: any[];
  todos3: Promise<any[]>;

  constructor(private todoService: Todo1Service) {
  }

  ngOnInit() {
    this.todoService.getTodos().then(response => this.todos1 = response.json());
    this.todoService.getTodos2().then(todos => this.todos2 = todos);
    this.todos3 = this.todoService.getTodos2();
  }
}
