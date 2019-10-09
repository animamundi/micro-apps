import { createReducer, Action, on } from '@ngrx/store';

import { TodoDictionary } from '../../models';
import { firebaseGetTodosSuccess } from '../actions';
import { arrayToRecord } from '../../utils';

export const TODOS_STATE = 'todos';

export interface TodosState {
  todos: TodoDictionary;
}

export const initialTodosState: TodosState = {
  todos: {},
};

const reducer = createReducer(
  initialTodosState,

  on(firebaseGetTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: arrayToRecord('id', todos),
  })),
);

export function todosReducer(
  state: TodosState | undefined,
  action: Action,
): TodosState {
  return reducer(state, action);
}
