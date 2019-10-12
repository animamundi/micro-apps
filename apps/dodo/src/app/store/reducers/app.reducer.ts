import { ActionReducerMap } from '@ngrx/store';

import { TODO_STATE, TodoState, todoReducer } from './todo.reducer';
import { AUTH_STATE, AuthState, authReducer } from './auth.reducer';
import {
  TodoListState,
  TODO_LIST_STATE,
  todoListReducer,
} from './todo-list.reducer';

export interface AppState {
  [TODO_LIST_STATE]: TodoListState;
  [TODO_STATE]: TodoState;
  [AUTH_STATE]: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  todoList: todoListReducer,
  todo: todoReducer,
  auth: authReducer,
};
