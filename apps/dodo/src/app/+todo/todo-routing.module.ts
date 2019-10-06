import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoLayoutComponent } from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
