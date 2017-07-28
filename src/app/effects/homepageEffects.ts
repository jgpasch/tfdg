import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

import * as homepageActions from './../actions/homepageActions';
import { FirebaseService } from './../shared/services/firebase.service';

@Injectable()
export class HomepageEffects {
  @Effect()
  fetchHomepageData$: Observable<any> = this.actions$
    .ofType(homepageActions.FETCH_HOMEPAGE_DATA)
    .map(toPayload)
    .mergeMap((payload) => {
      return this.firebaseService.getHomepageData()
      .map(data => ({ type: homepageActions.FETCH_HOMEPAGE_DATA_SUCCESS, payload: data }));
    })

  constructor(private actions$: Actions, private firebaseService: FirebaseService) { }
}
