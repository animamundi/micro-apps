import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoLayoutModule } from './components';

@NgModule({
  imports: [CommonModule, AddTodoRoutingModule, AddTodoLayoutModule],
})
export class AddTodoModule {}
