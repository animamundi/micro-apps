import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_STATE, AppState, TodosState, todosAdapter } from '../reducers';
import { Todo } from '../../models';

export const getTodosState = createFeatureSelector<AppState, TodosState>(
  TODOS_STATE,
);

const { selectEntities, selectIds } = todosAdapter.getSelectors();

export const getTodos = createSelector(
  getTodosState,
  selectEntities,
);

export const getTodoIds = createSelector(
  getTodosState,
  selectIds,
);

export const getTodoById = (id: Todo['id']) =>
  createSelector(
    getTodos,
    todos => todos[id],
  );

export const getTodoList = createSelector(
  getTodos,
  getTodoIds,
  (todos, todoIds) => (todoIds as string[]).map(id => todos[id] as Todo),
);

export const getDoneTodoList = createSelector(
  getTodoList,
  todos => todos.filter(({ done }) => done),
);

export const getNotDoneTodoList = createSelector(
  getTodoList,
  todos => todos.filter(({ done }) => !done),
);
