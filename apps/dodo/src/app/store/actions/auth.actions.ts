import { createAction, props } from '@ngrx/store';

import { User } from '../../models';

export const signInFormSignInWithGoogle = createAction(
  '[Sign In Form] Sign In With Google',
);

export const firebaseSignInWithGoogleSuccess = createAction(
  '[Firebase] Sign In With Google Success',
);

export const signInFormSignInAnonymously = createAction(
  '[Sign In Form] Sign In Anonymously',
);

export const firebaseSignInAnonymouslySuccess = createAction(
  '[Firebase] Sign In Anonymously Success',
);

export const headerSignOut = createAction('[Header] Sign Out');

export const firebaseSignOutSuccess = createAction(
  '[Firebase] Sign Out Success',
);

export interface SetAuthUserPayload {
  user: User | null;
}

export const firebaseGetAuthUserSuccess = createAction(
  '[Firebase] Get Auth User Success',
  props<SetAuthUserPayload>(),
);
