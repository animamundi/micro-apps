import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { appReducer, AuthEffects, TodoListEffects, TodoEffects } from './store';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, {
      metaReducers: !environment.production ? [] : [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([AuthEffects, TodoListEffects, TodoEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class AppStoreModule {}
