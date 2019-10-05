import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_STATE, AppState, TodosState, todosAdapter } from '../reducers';
import { Todo } from '../../models';

export const getTodosState = createFeatureSelector<AppState, TodosState>(
  TODOS_STATE,
);

const { selectEntities } = todosAdapter.getSelectors();

export const getTodos = createSelector(
  getTodosState,
  selectEntities,
);

export const getTodoById = (id: Todo['id']) =>
  createSelector(
    getTodos,
    todos => todos[id],
  );

export const getTodosList = createSelector(
  getTodos,
  todos => Object.keys(todos).map(id => todos[id] as Todo),
);
