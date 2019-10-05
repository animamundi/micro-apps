import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store.module';
import { TodoListContainerModule, TodoFormContainerModule } from './components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    AppStoreModule,
    TodoListContainerModule,
    TodoFormContainerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
