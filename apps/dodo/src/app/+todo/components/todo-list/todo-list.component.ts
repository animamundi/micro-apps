import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() public readonly todos?: Todo[];

  @Input() public readonly isLoading?: boolean;

  @Output() public readonly todoPrioritySet = new EventEmitter<Todo[]>();

  public onTodoPrioritySet(todos: Todo[]): void {
    this.todoPrioritySet.emit(todos);
  }
}
