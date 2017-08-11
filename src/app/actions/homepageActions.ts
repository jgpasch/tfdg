import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const FETCH_HOMEPAGE_DATA = 'fetch HOMEPAGE data';
export const FETCH_HOMEPAGE_DATA_SUCCESS = 'fetch HOMEPAGE data success';
export const TEAM_TAPPED = 'team tapped';

export class FetchHomepageData implements Action {
  readonly type = FETCH_HOMEPAGE_DATA;
  constructor() {};
}

export class FetchHomepageDataSuccess implements Action {
  readonly type = FETCH_HOMEPAGE_DATA_SUCCESS;
  constructor(public payload: any[]) {};
}

export class TeamTapped implements Action {
  readonly type = TEAM_TAPPED;
  constructor(public payload: string) {};
}

export type HomepageActions = FetchHomepageData | FetchHomepageDataSuccess | TeamTapped;
