import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, filter, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { TodoService } from '../../services';
import { mapProp, isNotNil } from '../../utils';
import {
  firebaseGetAuthUserSuccess,
  firebaseGetTodosSuccess,
  todoFormAddTodo,
  firebaseAddTodoSuccess,
  todoListTodoDoneChange,
  todoListDeleteTodo,
  firebaseUpdateTodoSuccess,
  firebaseDeleteTodoSuccess,
} from '../actions';
import { AppState } from '../reducers';
import { getAuthUid } from '../selectors';

@Injectable()
export class TodoEffects {
  public getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(firebaseGetAuthUserSuccess),
      mapProp('user'),
      switchMap(user => {
        if (!user) {
          return of([]);
        }

        return this.todoService.getTodos(user.uid);
      }),
      map(todos => firebaseGetTodosSuccess({ todos })),
    ),
  );

  public addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoFormAddTodo),
      mapProp('todo'),
      withLatestFrom(this.store.select(getAuthUid)),
      filter(([_todo, uid]) => isNotNil(uid)),
      switchMap(([todo, uid]) =>
        this.todoService.addTodo(uid as string, {
          ...todo,
          done: false,
        }),
      ),
      map(firebaseAddTodoSuccess),
    ),
  );

  public updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoListTodoDoneChange),
      mapProp('todo'),
      withLatestFrom(this.store.select(getAuthUid)),
      filter(([_todo, uid]) => isNotNil(uid)),
      switchMap(([todo, uid]) =>
        this.todoService.updateTodo(uid as string, todo),
      ),
      map(firebaseUpdateTodoSuccess),
    ),
  );

  public deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoListDeleteTodo),
      mapProp('todo'),
      withLatestFrom(this.store.select(getAuthUid)),
      filter(([_todo, uid]) => isNotNil(uid)),
      switchMap(([todo, uid]) =>
        this.todoService.deleteTodo(uid as string, todo),
      ),
      map(firebaseDeleteTodoSuccess),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly todoService: TodoService,
    private readonly store: Store<AppState>,
  ) {}
}
