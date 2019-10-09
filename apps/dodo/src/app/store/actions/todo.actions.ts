import { createAction, props } from '@ngrx/store';

import { Todo, MinimalTodo } from '../../models';

export interface AddTodoPayload {
  todo: MinimalTodo;
}

export const todoFormAddTodo = createAction(
  '[Todo Form] Add Todo',
  props<AddTodoPayload>(),
);

export interface TodoDoneChangePayload {
  todo: Todo;
}

export const todoListTodoDoneChange = createAction(
  '[Todo List] Todo Done Change',
  props<TodoDoneChangePayload>(),
);

export interface DeleteTodoPayload {
  todo: Todo;
}

export const todoListDeleteTodo = createAction(
  '[Todo List] Delete Todo',
  props<DeleteTodoPayload>(),
);

export interface UpdateTodoPriorityPayload {
  todos: Todo[];
}

export const todoListUpdateTodoPriority = createAction(
  '[Todo List] Update Todo Priority',
  props<UpdateTodoPriorityPayload>(),
);

export const doneTodoListUpdateTodoPriority = createAction(
  '[Done Todo List] Update Todo Priority',
  props<UpdateTodoPriorityPayload>(),
);

export const firebaseAddTodoSuccess = createAction(
  '[Firebase] Add Todo Success',
);

export interface GetTodosPayload {
  todos: Todo[];
}

export const firebaseGetTodosSuccess = createAction(
  '[Firebase] Get Todos Success',
  props<GetTodosPayload>(),
);

export const firebaseUpdateTodoSuccess = createAction(
  '[Firebase] Update Todo Success',
);

export const firebaseUpdateManyTodosSuccess = createAction(
  '[Firebase] Update Many Todos Success',
);

export const firebaseDeleteTodoSuccess = createAction(
  '[Firebase] Delete Todo Success',
);
