import { createReducer, on, Action } from '@ngrx/store';

import { User } from '../../models';
import { firebaseGetAuthUserSuccess } from '../actions';

export const AUTH_STATE = 'auth';

export interface AuthState {
  user: User | null;
}

export const initialAuthState: AuthState = {
  user: null,
};

const reducer = createReducer(
  initialAuthState,

  on(firebaseGetAuthUserSuccess, (state, { user }) => ({ ...state, user })),
);

export function authReducer(
  state: AuthState | undefined,
  action: Action,
): AuthState {
  return reducer(state, action);
}
