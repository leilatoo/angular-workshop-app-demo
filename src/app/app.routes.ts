import { provideRouter, RouterConfig } from '@angular/router';

import { GamesComponent } from './games';
import { HelloWorldComponent} from './1-component';
import { ShoppingCartComponent} from './1-component';
import { ClickCounterComponent} from './1-component';
import { TodoComponent} from './1-component';
import { LoginComponent} from './1-component';

import { Leaderboard1Component, LeaderboardIndex2Component, LeaderboardIndex3Component } from './2-service';

import { DirectiveShowcaseComponent} from './3-directive';

import { Todo1Component} from './4-promise';

export const routes: RouterConfig = [
  { path: '', component: HelloWorldComponent },

  { path: 'helloWorld', component: HelloWorldComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: 'clickCounter', component: ClickCounterComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'login', component: LoginComponent},

  { path: 'leaderboard1', component: Leaderboard1Component},
  { path: 'leaderboard2', component: LeaderboardIndex2Component},
  { path: 'leaderboard3', component: LeaderboardIndex3Component},

  { path: 'directive', component: DirectiveShowcaseComponent},

  { path: 'todo2', component: Todo1Component},

  { path: 'games', component: GamesComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
