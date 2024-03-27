import { createAction, props } from '@ngrx/store';

export const loadDog = createAction('[Dog] Load dog');
export const loadDogSuccess = createAction(
  '[Dog] Load dog success',
  props<{ dog: any }>()
);
export const loadDogFailure = createAction(
  '[Dog] Load dog failure',
  props<{ error: any }>()
);
