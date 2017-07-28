import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const FETCH_TEAMS = 'Fetch TEAMS';
export const FETCH_TEAMS_SUCCESS = 'Fetch TEAMS Success';

export class FetchTeams implements Action {
  readonly type = FETCH_TEAMS;
  constructor() { };
}

export class FetchTeamsSuccess implements Action {
  readonly type = FETCH_TEAMS_SUCCESS;
  constructor(public payload: any[]) { };
}

export type TeamActions = FetchTeams | FetchTeamsSuccess;
