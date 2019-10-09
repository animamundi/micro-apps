import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, todoFormAddTodo } from '../../../store';
import { MinimalTodo } from '../../../models';

@Component({
  selector: 'nmg-todo-form-container',
  templateUrl: './todo-form-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormContainerComponent {
  constructor(private readonly store: Store<AppState>) {}

  public onAddToDo(todo: MinimalTodo): void {
    this.store.dispatch(todoFormAddTodo({ todo }));
  }
}
