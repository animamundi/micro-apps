import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

import { Todo } from '../../models';
import {
  todoFormAddTodo,
  todoListDeleteTodo,
  todoListTodoDoneChange,
} from '../actions';

export const TODOS_STATE = 'todos';

export type TodoEntity = Todo;

export type TodosState = EntityState<TodoEntity>;

export const todosAdapter = createEntityAdapter<TodoEntity>();

export const initialTodosState = todosAdapter.getInitialState();

const reducer = createReducer(
  initialTodosState,

  on(todoFormAddTodo, (state, { title }) =>
    todosAdapter.addOne(
      { title, done: false, id: `${state.ids.length + 1}` },
      state,
    ),
  ),

  on(todoListTodoDoneChange, (state, todo) =>
    todosAdapter.updateOne({ id: todo.id, changes: todo }, state),
  ),

  on(todoListDeleteTodo, (state, { id }) => todosAdapter.removeOne(id, state)),
);

export function todosReducer(
  state: TodosState | undefined,
  action: Action,
): TodosState {
  return reducer(state, action);
}
