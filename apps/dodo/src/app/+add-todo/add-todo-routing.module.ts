import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTodoLayoutComponent } from './components';

const routes: Routes = [{ path: '', component: AddTodoLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTodoRoutingModule {}
