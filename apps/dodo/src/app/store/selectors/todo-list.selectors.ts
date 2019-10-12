import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, TodoListState, TODO_LIST_STATE } from '../reducers';
import { recordToArray } from '../../utils';

export const getTodoListState = createFeatureSelector<AppState, TodoListState>(
  TODO_LIST_STATE,
);

export const getTodoLists = createSelector(
  getTodoListState,
  ({ todoLists }) => todoLists,
);

export const getTodoListArray = createSelector(
  getTodoLists,
  todoLists => recordToArray(todoLists),
);
