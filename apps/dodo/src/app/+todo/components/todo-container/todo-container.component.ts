import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  AppState,
  getTodoById,
  todoListTodoDoneChange,
  todoListDeleteTodo,
} from '../../../store';
import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo-container',
  templateUrl: './todo-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContainerComponent {
  public todo$?: Observable<Todo | undefined>;

  @Input() public set id(id: Todo['id']) {
    this.todo$ = this.store.select(getTodoById(id));
  }

  constructor(private readonly store: Store<AppState>) {}

  public onTodoDoneChanged(todo: Todo): void {
    this.store.dispatch(todoListTodoDoneChange(todo));
  }

  public onDeleteTodo(todo: Todo): void {
    this.store.dispatch(todoListDeleteTodo(todo));
  }
}
