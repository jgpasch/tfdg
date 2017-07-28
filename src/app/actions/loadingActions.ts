import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const LOADING = 'loading';
export const LOADING_SUCCESS = 'loading success';

export class Loading implements Action {
  readonly type = LOADING;
  constructor() {};
}

export class LoadingSuccess implements Action {
  readonly type = LOADING_SUCCESS;
  constructor() {};
}

export type LoadingActions = Loading | LoadingSuccess;
