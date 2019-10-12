import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../../../models';
import {
  AppState,
  getDoneTodoArray,
  doneTodoListUpdateTodoPriority,
} from '../../../store';

@Component({
  selector: 'nmg-done-todo-list-container',
  templateUrl: './done-todo-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneTodoListContainerComponent implements OnInit {
  public todos$?: Observable<Todo[]>;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.todos$ = this.store.select(getDoneTodoArray);
  }

  public onTodoPrioritySet(todos: Todo[]): void {
    this.store.dispatch(doneTodoListUpdateTodoPriority({ todos }));
  }
}
