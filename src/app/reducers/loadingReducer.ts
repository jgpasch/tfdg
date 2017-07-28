import * as loadingActions from './../actions/loadingActions';
import { Store } from '@ngrx/store';

export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false
};

export function loadingReducer( state = initialState, action: loadingActions.LoadingActions): LoadingState {
  switch (action.type) {
    case loadingActions.LOADING:
      return {
        loading: true
      }

    case loadingActions.LOADING_SUCCESS:
      return {
        loading: false
      }

    default:
      return state;
  }
}
