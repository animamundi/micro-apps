import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

import { Todo } from '../../models';

@Component({
  selector: 'nmg-todo-list',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() public readonly todos?: Todo[];

  public trackByTodoId({ id }: Todo): string {
    return id;
  }
}
