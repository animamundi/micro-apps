import { TODOS_STATE, TodosState, todosReducer } from './todos.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  [TODOS_STATE]: TodosState;
}

export const appReducer: ActionReducerMap<AppState> = {
  [TODOS_STATE]: todosReducer,
};
