import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AppState,
  getNotDoneTodoArray,
  todoListUpdateTodoPriority,
  getTodosIsLoading,
} from '../../../store';
import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListContainerComponent implements OnInit {
  public todos$?: Observable<Todo[]>;
  public isLoading$?: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.todos$ = this.store.select(getNotDoneTodoArray);
    this.isLoading$ = this.store.select(getTodosIsLoading);
  }

  public onTodoPrioritySet(todos: Todo[]): void {
    this.store.dispatch(todoListUpdateTodoPriority({ todos }));
  }
}
