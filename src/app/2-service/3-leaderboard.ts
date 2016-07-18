import { Component, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Leaderboard3Service {
  private i = 0;
  discipline = new Subject<string>();
  betterDiscipline = new ReplaySubject<string>();

  constructor() {
    this.nextDiscipline();
  }

  nextDiscipline(): void {
    this.discipline.next('pokemon ' + ++this.i);
    this.betterDiscipline.next('pokemon ' + this.i);
  }
}

@Component({
  selector: 'my-leaderboard3',
  template: `
    discipline: {{discipline | async}}<br>
    betterDiscipline: {{betterDiscipline | async}}<br>
    <button (click)="nextDiscipline()">Next discipline</button>
  `
})
export class Leaderboard3Component implements OnInit {
  discipline: Observable<string>;
  betterDiscipline: Observable<string>;

  constructor(private leaderboardService: Leaderboard3Service) {
  }

  nextDiscipline(): void {
    this.leaderboardService.nextDiscipline();
  }

  ngOnInit() {
    this.discipline = this.leaderboardService.discipline;
    this.betterDiscipline = this.leaderboardService.betterDiscipline;
  }
}

@Component({
  selector: 'my-leaderboard-index3',
  directives:  [Leaderboard3Component],
  providers: [Leaderboard3Service],
  template: `
    <my-leaderboard3></my-leaderboard3>
    <p>
    <my-leaderboard3></my-leaderboard3>`
})
export class LeaderboardIndex3Component implements OnInit {
  ngOnInit() {
  }
}
