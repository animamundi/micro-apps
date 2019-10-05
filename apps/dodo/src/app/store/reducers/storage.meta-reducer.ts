import { ActionReducer, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Todo } from '../../models';
import { AppState } from './app.reducer';
import { TODOS_STATE } from './todos.reducer';

const TODOS_STORAGE = TODOS_STATE;

const saveState = <T>(state: T, localStorageKey: string) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
};

const getSavedState = <T>(localStorageKey: string): T | null => {
  const storedState = localStorage.getItem(localStorageKey);

  if (!storedState) {
    return null;
  }

  return JSON.parse(storedState);
};

const saveTodos = (todos: Dictionary<Todo>) => {
  saveState(todos, TODOS_STORAGE);
};

const getSavedTodos = () => getSavedState<Dictionary<Todo>>(TODOS_STORAGE);

export function storageMetaReducer(
  reducer: ActionReducer<AppState, Action>,
): ActionReducer<AppState, Action> {
  let onInit = true;

  return function(state: AppState | undefined, action: Action): AppState {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;

      const savedTodos = getSavedTodos();

      if (!savedTodos) {
        return nextState;
      }

      const savedTodoIds = Object.keys(savedTodos);

      return Object.assign({}, nextState, {
        [TODOS_STATE]: { ids: savedTodoIds, entities: savedTodos },
      });
    }

    const todosToSave = nextState.todos.entities;
    saveTodos(todosToSave);
    return nextState;
  };
}
