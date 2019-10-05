import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'nmg-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  @Output() public addTodo = new EventEmitter<void>();

  public onAddTodoClicked(): void {
    this.addTodo.emit();
  }
}
