import { createReducer, on } from '@ngrx/store';
import { hide, show } from '../actions/home.actions';

export const initialState = false;

export const homeReducer = createReducer(
  initialState,
  on(show, (state) => true),
  on(hide, (state) => false)
);
