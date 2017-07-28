import * as homepageActions from './../actions/homepageActions';

export interface HomepageState {
  loading: boolean;
  teams: any[];
}

const initialState: HomepageState = {
  loading: false,
  teams: []
};

export function homepageReducer( state = initialState, action: homepageActions.HomepageActions ): HomepageState {
  switch (action.type) {
    case homepageActions.FETCH_HOMEPAGE_DATA:
      return {
        ...state,
        loading: true
      }

    case homepageActions.FETCH_HOMEPAGE_DATA_SUCCESS:
      return {
        loading: false,
        teams: action.payload
      }

    default:
      return state;
  }
}
