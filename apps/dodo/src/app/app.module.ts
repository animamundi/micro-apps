import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store.module';
import {
  TodoListContainerModule,
  AddTodoContainerModule,
  HeaderModule,
} from './components';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppStoreModule,
    HeaderModule,
    TodoListContainerModule,
    AddTodoContainerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
