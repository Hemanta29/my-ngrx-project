import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './ngrx-state/reducers/home.reducer';
import { HttpClientModule } from '@angular/common/http';
import { dogReducer } from './ngrx-state/reducers/dog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DogEffects } from './ngrx-state/effects/dog.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      HttpClientModule,
      StoreModule.forRoot({ home: homeReducer, dog: dogReducer }),
      EffectsModule.forRoot([DogEffects]),
    ]),
  ],
};
