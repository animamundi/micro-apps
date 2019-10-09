import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_STATE, AppState, TodosState } from '../reducers';
import { Todo } from '../../models';
import { recordToArray } from '../../utils';

export const getTodosState = createFeatureSelector<AppState, TodosState>(
  TODOS_STATE,
);

export const getTodos = createSelector(
  getTodosState,
  ({ todos }) => todos,
);

export const getTodoById = (id: Todo['id']) =>
  createSelector(
    getTodos,
    todos => todos[id],
  );

export const getTodoList = createSelector(
  getTodos,
  todos =>
    recordToArray(todos).sort((a, b) => (a.priority || 0) - (b.priority || 0)),
);

export const getDoneTodoList = createSelector(
  getTodoList,
  todos => todos.filter(({ done }) => done),
);

export const getNotDoneTodoList = createSelector(
  getTodoList,
  todos => todos.filter(({ done }) => !done),
);
