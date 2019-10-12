import { createReducer, Action, on } from '@ngrx/store';

import { TodoDictionary } from '../../models';
import {
  firebaseGetTodosSuccess,
  setTodosIsLoading,
  unsetTodosIsLoading,
} from '../actions';
import { arrayToRecord } from '../../utils';

export const TODO_STATE = 'todo';

export interface TodoState {
  isLoading: boolean;
  todos: TodoDictionary;
}

export const initialTodoState: TodoState = {
  isLoading: false,
  todos: {},
};

const reducer = createReducer(
  initialTodoState,

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

export function todoReducer(
  state: TodoState | undefined,
  action: Action,
): TodoState {
  return reducer(state, action);
}
