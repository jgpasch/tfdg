import * as teamActions from './../actions/teamActions';
import { FirebaseListObservable } from 'angularfire2/database';

// Define team state
export interface TeamState {
  teams: any[];
}

// Define initial state
const initialState: TeamState = {
  teams: []
};
// reducer function
export function teamsReducer( state = initialState, action: teamActions.TeamActions ): TeamState {
   switch (action.type) {
     case teamActions.FETCH_TEAMS:
       console.log(state);
       return {
         ...state
        }

     case teamActions.FETCH_TEAMS_SUCCESS:
       return {
         teams: action.payload,
       }

     default:
      return state
  }
}
