import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Rpc, ToggleService, MyToggleDirective, MyToggleableDirective } from './shared';
import { GameManagementService } from './games';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  providers: [GameManagementService, Rpc, ToggleService],
  directives: [...ROUTER_DIRECTIVES, MyToggleDirective, MyToggleableDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
