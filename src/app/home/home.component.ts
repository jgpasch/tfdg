import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Store } from '@ngrx/store';
import * as fromRoot from './../reducers/teamsReducer';
import * as teamActions from './../actions/teamActions';
import * as homepageActions from './../actions/homepageActions';
import * as loadingActions from './../actions/loadingActions';
import { FirebaseService } from './../shared/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teams: any[];

  constructor(
    private db: AngularFireDatabase,
    private firebaseService: FirebaseService,
    private store: Store<any>,
    private router: Router
  ) {
    this.store.select(state => state).subscribe(state => {
      const temp = state['_homepage']['teams'];
      // const temp = state.teams;
      this.sort(temp);
      this.teams = temp;
      if (this.teams.length > 0 && state._loading.loading) {
        this.store.dispatch(new loadingActions.LoadingSuccess());
      }
    });
    this.store.dispatch(new loadingActions.Loading());
    this.store.dispatch(new homepageActions.FetchHomepageData());
  }

  teamTapped(teamName) {
    this.store.dispatch({ type: homepageActions.TEAM_TAPPED, payload: teamName})
    this.router.navigate([`/team/${teamName}`])
  }

  getTeams() {
    this.store.dispatch({ type: homepageActions.FETCH_HOMEPAGE_DATA_SUCCESS });
  }

  sup(i: number) {
    switch (i) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  sort(items: any[]): void {
    items.sort((a: any, b: any) => {
      const alp = parseInt(a.lp, 10);
      const blp = parseInt(b.lp, 10);
      if (alp > blp) {
        return -1;
      } else if (alp < blp) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
