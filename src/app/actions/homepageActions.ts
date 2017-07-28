import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const FETCH_HOMEPAGE_DATA = 'fetch HOMEPAGE data';
export const FETCH_HOMEPAGE_DATA_SUCCESS = 'fetch HOMEPAGE data success';

export class FetchHomepageData implements Action {
  readonly type = FETCH_HOMEPAGE_DATA;
  constructor() {};
}

export class FetchHomepageDataSuccess implements Action {
  readonly type = FETCH_HOMEPAGE_DATA_SUCCESS;
  constructor(public payload: any[]) {};
}

export type HomepageActions = FetchHomepageData | FetchHomepageDataSuccess;
