import { createAction, props } from '@ngrx/store';

import { Todo, MinimalTodo } from '../../models';

export type AddTodoPayload = MinimalTodo;

export const todoFormAddTodo = createAction(
  '[Todo Form] Add Todo',
  props<AddTodoPayload>(),
);

export type TodoDoneChangePayload = Todo;

export const todoListTodoDoneChange = createAction(
  '[Todo List] Todo Done Change',
  props<TodoDoneChangePayload>(),
);

export type DeleteTodoPayload = Pick<Todo, 'id'>;

export const todoListDeleteTodo = createAction(
  '[Todo List] Delete Todo',
  props<DeleteTodoPayload>(),
);
