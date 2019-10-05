import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store.module';
import { TodoListContainerModule, AddTodoContainerModule } from './components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppStoreModule,
    TodoListContainerModule,
    AddTodoContainerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
