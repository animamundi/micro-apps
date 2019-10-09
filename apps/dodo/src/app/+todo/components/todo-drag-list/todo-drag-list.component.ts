import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo-drag-list',
  templateUrl: './todo-drag-list.component.html',
  styleUrls: ['./todo-drag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDragListComponent {
  @Input() public todos?: Todo[];

  public trackByTodoId({ id }: Todo): string {
    return id;
  }
}
