import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers/teamsReducer';
import * as teamActions from './actions/teamActions';
import { FirebaseService } from './shared/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teams: any[];
  team_names: any[];
  players: any[];

  constructor(private db: AngularFireDatabase, private firebaseService: FirebaseService, private store: Store<any>) {
    this.store.select(state => state).subscribe(state => {
      this.teams = state['_teams']['teams'];
    });
  }

  getTeams() {
    this.store.dispatch({ type: teamActions.FETCH_TEAMS });
  }

}
