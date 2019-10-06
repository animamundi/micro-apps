import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

import { Todo } from '../../models';
import { firebaseGetTodosSuccess } from '../actions';

export const TODOS_STATE = 'todos';

export type TodoEntity = Todo;

export type TodosState = EntityState<TodoEntity>;

export const todosAdapter = createEntityAdapter<TodoEntity>();

export const initialTodosState = todosAdapter.getInitialState();

const reducer = createReducer(
  initialTodosState,

  on(firebaseGetTodosSuccess, (state, { todos }) =>
    todosAdapter.addAll(todos, state),
  ),
);

export function todosReducer(
  state: TodosState | undefined,
  action: Action,
): TodosState {
  return reducer(state, action);
}
