import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import * as teamActions from './../actions/teamActions';
import { FirebaseService } from './../shared/services/firebase.service';


@Injectable()

export class TeamEffects {




// @Effect()
// searchFood$: Observable<Action> = this.actions$
//  // Listen for the 'SEARCH' action
// .ofType(teamActions.FETCH_TEAMS)
// .map(toPayload)
// .switchMap(query => {
//     return this.firebaseService.searchFood(query)
//     .map(results => new teamActions.SearchDone(results));
//     // catch(() => of(new FoodActions.FetchFoodFail()))
// });

@Effect()
fetchTeams$: Observable<any> = this.actions$
 // Listen for the 'FETCH_FOOD' action
.ofType(teamActions.FETCH_TEAMS)
.map(toPayload)
.mergeMap((payload) => {
    return this.firebaseService.getTeams()
    .map(teams => ({ type: teamActions.FETCH_TEAMS_SUCCESS, payload: teams }));
    // catch(() => of(new FoodActions.FetchFoodFail()))
});

constructor(private actions$: Actions,
            private firebaseService: FirebaseService) {}

}
