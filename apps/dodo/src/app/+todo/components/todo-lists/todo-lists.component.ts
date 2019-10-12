import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TodoList } from '../../../models';

@Component({
  selector: 'nmg-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListsComponent {
  @Input() public todoLists?: TodoList[];
}
