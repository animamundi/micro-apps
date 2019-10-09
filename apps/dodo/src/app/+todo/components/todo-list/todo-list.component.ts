import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() public readonly todos?: Todo[];
}
