import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoListService } from '../../services';
import {
  firebaseGetAuthUserSuccess,
  firebaseGetTodoListsSuccess,
} from '../actions';
import { mapProp } from '../../utils';

@Injectable()
export class TodoListEffects {
  public getTodoLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(firebaseGetAuthUserSuccess),
      mapProp('user'),
      switchMap(user =>
        user ? this.todoListService.getTodoLists(user.uid) : of([]),
      ),
      map(todoLists => firebaseGetTodoListsSuccess({ todoLists })),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly todoListService: TodoListService,
  ) {}
}
