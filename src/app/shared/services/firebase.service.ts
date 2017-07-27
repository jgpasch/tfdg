import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {
  }

  getTeams(): Observable<any> {
    return this.db.list('/teams');
  }

  getTeamNames(): Observable<any> {
    return this.db.list('/team_names');
  }

  getPlayers(): Observable<any> {
    return this.db.list('/players');
  }
}
