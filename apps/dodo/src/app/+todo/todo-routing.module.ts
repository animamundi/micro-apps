import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoLayoutComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: TodoLayoutComponent,
    children: [
      {
        path: 'add',
        loadChildren: () =>
          import('../+add-todo/add-todo.module').then(m => m.AddTodoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
