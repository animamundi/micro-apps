import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, filter, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';

import { TodoService } from '../../services';
import { mapProp, isString } from '../../utils';
import {
  firebaseGetAuthUserSuccess,
  firebaseGetTodosSuccess,
  todoFormAddTodo,
  firebaseAddTodoSuccess,
  todoListTodoDoneChange,
  todoListDeleteTodo,
  firebaseUpdateTodoSuccess,
  firebaseDeleteTodoSuccess,
  todoListUpdateTodoPriority,
  firebaseUpdateManyTodosSuccess,
  doneTodoListUpdateTodoPriority,
  setTodosIsLoading,
  unsetTodosIsLoading,
} from '../actions';
import { AppState } from '../reducers';
import { getAuthUid, getTodosIsLoading } from '../selectors';

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

  public setTodosIsLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(firebaseGetAuthUserSuccess),
      withLatestFrom(this.store.select(getTodosIsLoading)),
      filter(([user, isLoading]) => user && !isLoading),
      map(setTodosIsLoading),
    ),
  );

  public unsetTodosIsLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(firebaseGetTodosSuccess),
      withLatestFrom(this.store.select(getTodosIsLoading)),
      filter(([_, isLoading]) => isLoading),
      map(unsetTodosIsLoading),
    ),
  );

  public addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoFormAddTodo),
      mapProp('todo'),
      this.withUid(),
      switchMap(([todo, uid]) => this.todoService.addTodo(uid, todo)),
      map(firebaseAddTodoSuccess),
    ),
  );

  public updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoListTodoDoneChange),
      mapProp('todo'),
      this.withUid(),
      switchMap(([todo, uid]) => this.todoService.updateTodo(uid, todo)),
      map(firebaseUpdateTodoSuccess),
    ),
  );

  public updateManyTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoListUpdateTodoPriority, doneTodoListUpdateTodoPriority),
      mapProp('todos'),
      this.withUid(),
      switchMap(([todos, uid]) => this.todoService.updateManyTodos(uid, todos)),
      map(firebaseUpdateManyTodosSuccess),
    ),
  );

  public deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoListDeleteTodo),
      mapProp('todo'),
      this.withUid(),
      switchMap(([todo, uid]) => this.todoService.deleteTodo(uid, todo)),
      map(firebaseDeleteTodoSuccess),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly todoService: TodoService,
    private readonly store: Store<AppState>,
  ) {}

  private withUid<T>() {
    return (source: Observable<T>) =>
      source.pipe(
        withLatestFrom(this.store.select(getAuthUid)),
        filter((data): data is [T, string] => isString(data[1])),
      );
  }
}
