import { Component, OnInit } from '@angular/core';

export class Login {
  constructor(public username: string, public password: string) {
  }
}

@Component({
  selector: 'my-login',
  styleUrls: ['./7-login.component.scss'],
  template: `<div class="container">
    <h1>Login Form</h1>
    <form *ngIf="resetFormHack" (ngSubmit)="login()" #loginForm="ngForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" required [(ngModel)]="model.username" name="username" #usernameSpy #username="ngModel">
        {{usernameSpy.className}}
        <div [hidden]="username.valid || username.pristine" class="alert alert-danger">Required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" required [(ngModel)]="model.password" name="password" #passwordSpy #password="ngModel">
        {{passwordSpy.className}}
        <div [hidden]="password.valid || password.pristine" class="alert alert-danger">Required</div>
      </div>
      <button type="submit" class="btn btn-default" [disabled]="!loginForm.form.valid">
        Login
      </button>
    </form>
    <h2>{{model | json}}</h2>
  </div>`
})
export class LoginComponent implements OnInit {
  model = new Login('', '');
  resetFormHack = true;

  login() {
    console.log('Logging with', this.model.username, this.model.password);
    this.model = new Login('', '');
    this.resetFormHack = false;
    setTimeout(() => this.resetFormHack = true, 0);
  }

  ngOnInit() {
  }
}
