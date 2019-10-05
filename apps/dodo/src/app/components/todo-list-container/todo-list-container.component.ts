import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AppState,
  getTodoList,
  getCompleteTodoList,
  getIncompleteTodoList,
} from '../../store';
import { Todo } from '../../models';

@Component({
  selector: 'nmg-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListContainerComponent implements OnInit {
  public todos$?: Observable<Todo[]>;
  public completeTodos$?: Observable<Todo[]>;
  public incompleteTodos$?: Observable<Todo[]>;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.todos$ = this.store.select(getTodoList);
    this.completeTodos$ = this.store.select(getCompleteTodoList);
    this.incompleteTodos$ = this.store.select(getIncompleteTodoList);
  }
}
