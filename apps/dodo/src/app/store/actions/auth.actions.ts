import { createAction, props } from '@ngrx/store';

import { User } from '../../models';

export const signInFormSignInWithGoogle = createAction(
  '[Sign in Form] Sign In With Google',
);

export const headerSignOut = createAction('[Header] Sign Out');

export interface SetAuthUserPayload {
  user: User | null;
}

export const firebaseGetAuthUserSuccess = createAction(
  '[Firebase] Get Auth User Success',
  props<SetAuthUserPayload>(),
);

export const firebaseSignInWithGoogleSuccess = createAction(
  '[Firebase] Sign In With Google Success',
);

export const firebaseSignOutSuccess = createAction(
  '[Firebase] Sign Out Success',
);
