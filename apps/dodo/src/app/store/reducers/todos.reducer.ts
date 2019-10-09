import { createReducer, Action, on } from '@ngrx/store';

import { TodoDictionary } from '../../models';
import {
  firebaseGetTodosSuccess,
  setTodosIsLoading,
  unsetTodosIsLoading,
} from '../actions';
import { arrayToRecord } from '../../utils';

export const TODOS_STATE = 'todos';

export interface TodosState {
  isLoading: boolean;
  todos: TodoDictionary;
}

export const initialTodosState: TodosState = {
  isLoading: false,
  todos: {},
};

const reducer = createReducer(
  initialTodosState,

  on(firebaseGetTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: arrayToRecord('id', todos),
  })),

  on(setTodosIsLoading, state => ({
    ...state,
    isLoading: true,
  })),

  on(unsetTodosIsLoading, state => ({
    ...state,
    isLoading: false,
  })),
);

export function todosReducer(
  state: TodosState | undefined,
  action: Action,
): TodosState {
  return reducer(state, action);
}
