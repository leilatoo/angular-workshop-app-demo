import { Injectable } from '@angular/core';
import { Rpc } from '../shared/rpc';
import 'rxjs/add/operator/map';

@Injectable()
export class GameManagementService {
  constructor(private rpc: Rpc) {}

  getAllGames() {
    return this.rpc.invoke('GameManagementService', 'GetAllGames');
  }
  suspendGame(gameId: string, isSuspended: boolean) {
    return this.rpc.invoke('GameManagementService', 'SuspendGame', gameId, isSuspended);
  }
}
