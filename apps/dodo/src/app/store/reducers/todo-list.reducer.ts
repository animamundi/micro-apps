import { TodoListDictionary } from '../../models';
import { createReducer, on, Action } from '@ngrx/store';
import { firebaseGetTodoListsSuccess } from '../actions';
import { arrayToRecord } from '../../utils';

export const TODO_LIST_STATE = 'todoList';

export interface TodoListState {
  isLoading: boolean;
  todoLists: TodoListDictionary;
}

export const initialTodoListState: TodoListState = {
  isLoading: false,
  todoLists: {},
};

const reducer = createReducer(
  initialTodoListState,

  on(firebaseGetTodoListsSuccess, (state, { todoLists }) => ({
    ...state,
    todoLists: arrayToRecord('id', todoLists),
  })),
);

export function todoListReducer(
  state: TodoListState | undefined,
  action: Action,
): TodoListState {
  return reducer(state, action);
}
