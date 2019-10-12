import { props, createAction } from '@ngrx/store';

import { TodoList } from '../../models';

export interface GetTodoListsPayload {
  todoLists: TodoList[];
}

export const firebaseGetTodoListsSuccess = createAction(
  '[Firebase] Get Todo Lists Success',
  props<GetTodoListsPayload>(),
);
