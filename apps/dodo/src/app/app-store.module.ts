import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { appReducer, storageMetaReducer } from './store';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, {
      metaReducers: !environment.production
        ? [storageMetaReducer]
        : [storageMetaReducer],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class AppStoreModule {}
