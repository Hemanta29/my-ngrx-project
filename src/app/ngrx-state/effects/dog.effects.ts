import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '../../services/home.service';
import * as DogActions from '../actions/dog.actions';
import { catchError, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogActions.loadDog),
      mergeMap(() =>
        this.homeService.getDog().pipe(
          map((dog) => DogActions.loadDogSuccess({ dog })),
          catchError((error) => [DogActions.loadDogFailure({ error })])
        )
      )
    )
  );

  constructor(private actions$: Actions, private homeService: HomeService) {}
}
