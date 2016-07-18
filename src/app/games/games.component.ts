import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameManagementService } from './gameManagement.service';
import { MyToggleDirective, MyToggleableDirective } from '../shared';

@Component({
  selector: 'my-games',
  providers: [GameManagementService],
  directives: [MyToggleDirective, MyToggleableDirective],
  templateUrl: './games.html',
})
export class GamesComponent implements OnInit {
  games: Observable<any>;

  constructor(private gameManagementService: GameManagementService) {
  }

  suspendGame(gameId: string, isSuspended: boolean) {
    this.gameManagementService.suspendGame(gameId, false).subscribe();
  }

  ngOnInit() {
    this.games = this.gameManagementService.getAllGames();
  }
}
