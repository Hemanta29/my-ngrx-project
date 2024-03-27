import { createReducer, on } from '@ngrx/store';
import * as DogActions from '../actions/dog.actions';

export const initialState: any = {};

export const dogReducer = createReducer(
  initialState,
  on(DogActions.loadDogSuccess, (state, { dog }) => dog),
  on(DogActions.loadDogFailure, (state, { error }) => state)
);
