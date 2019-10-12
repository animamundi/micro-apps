import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TODO_STATE, AppState, TodoState } from '../reducers';
import { Todo } from '../../models';
import { recordToArray } from '../../utils';

export const getTodoState = createFeatureSelector<AppState, TodoState>(
  TODO_STATE,
);

export const getTodos = createSelector(
  getTodoState,
  ({ todos }) => todos,
);

export const getTodosIsLoading = createSelector(
  getTodoState,
  ({ isLoading }) => isLoading,
);

export const getTodoById = (id: Todo['id']) =>
  createSelector(
    getTodos,
    todos => todos[id],
  );

export const getTodoArray = createSelector(
  getTodos,
  todos =>
    recordToArray(todos).sort((a, b) => (a.priority || 0) - (b.priority || 0)),
);

export const getDoneTodoArray = createSelector(
  getTodoArray,
  todos => todos.filter(({ done }) => done),
);

export const getNotDoneTodoArray = createSelector(
  getTodoArray,
  todos => todos.filter(({ done }) => !done),
);
