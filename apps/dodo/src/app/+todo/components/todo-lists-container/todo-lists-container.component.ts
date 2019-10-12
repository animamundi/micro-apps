import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoList } from '../../../models';
import { AppState, getTodoListArray } from '../../../store';

@Component({
  selector: 'nmg-todo-lists-container',
  templateUrl: './todo-lists-container.component.html',
  styleUrls: ['./todo-lists-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListsContainerComponent implements OnInit {
  public todoLists$?: Observable<TodoList[]>;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.todoLists$ = this.store.select(getTodoListArray);
  }
}
