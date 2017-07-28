import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const FETCH_TEAM_NAMES = 'fetch TEAM NAMES';
export const FETCH_TEAM_NAMES_SUCCESS = 'fetch TEAM NAMES success';

export class FetchTeamNames implements Action {
  readonly type = FETCH_TEAM_NAMES;
  constructor() { };
}

export class FetchTeamNamesSuccess implements Action {
  readonly type = FETCH_TEAM_NAMES_SUCCESS;
  constructor(public payload: any[]) { };
}

export type TeamNameActions = FetchTeamNames | FetchTeamNamesSuccess;
