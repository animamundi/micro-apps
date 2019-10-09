import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo-drag-list',
  templateUrl: './todo-drag-list.component.html',
  styleUrls: ['./todo-drag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDragListComponent {
  @Input() public todos?: Todo[];

  @Output() public todoPrioritySet = new EventEmitter<Todo[]>();

  public trackByTodoId({ id }: Todo): string {
    return id;
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (!this.todos) {
      return;
    }

    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);

    const updatedTodos = this.todos.map((todo, index) => ({
      ...todo,
      priority: index,
    }));
    this.todoPrioritySet.emit(updatedTodos);
  }
}
