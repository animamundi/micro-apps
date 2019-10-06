import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, AuthState, AUTH_STATE } from '../reducers';

export const getAuthState = createFeatureSelector<AppState, AuthState>(
  AUTH_STATE,
);

export const getAuthUser = createSelector(
  getAuthState,
  ({ user }) => user,
);

export const getAuthUid = createSelector(
  getAuthUser,
  user => (user && user.uid) || null,
);
