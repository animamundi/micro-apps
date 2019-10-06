import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoLayoutModule } from './components';

@NgModule({
  imports: [CommonModule, TodoRoutingModule, TodoLayoutModule],
})
export class TodoModule {}
