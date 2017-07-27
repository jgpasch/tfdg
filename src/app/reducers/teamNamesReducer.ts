import * as teamNameActions from './../actions/teamNameActions';

export interface TeamNameState {
  team_names: any[];
}

const initialState: TeamNameState = {
  team_names: []
};

export function teamNamesReducer( state = initialState, action: teamNameActions.TeamNameActions ): TeamNameState {
  switch (action.type) {
    case teamNameActions.FETCH_TEAM_NAMES:
      return {
        ...state
      }

    case teamNameActions.FETCH_TEAM_NAMES_SUCCESS:
      return {
        team_names: action.payload
      }

    default:
      return state;
  }
}
