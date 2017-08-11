import * as homepageActions from './../actions/homepageActions';

export interface HomepageState {
  loading: boolean;
  teams: any[];
  selectedTeam: string;
}

const initialState: HomepageState = {
  loading: false,
  teams: [],
  selectedTeam: undefined
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
        teams: action.payload,
        selectedTeam: undefined
      }

    case homepageActions.TEAM_TAPPED:
      console.log(`team ${action.payload} was selected`);
      return {
        loading: false,
        teams: state.teams,
        selectedTeam: action.payload
      }

    default:
      return state;
  }
}
