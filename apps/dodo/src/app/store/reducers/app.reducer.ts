import { ActionReducerMap } from '@ngrx/store';

import { TODOS_STATE, TodosState, todosReducer } from './todos.reducer';
import { AUTH_STATE, AuthState, authReducer } from './auth.reducer';

export interface AppState {
  [TODOS_STATE]: TodosState;
  [AUTH_STATE]: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todosReducer,
  auth: authReducer,
};
