import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import {
  TodoListContainerModule,
  AddTodoContainerModule,
  HeaderModule,
  UpdateAvailableModule,
} from './components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AppStoreModule,
    HeaderModule,
    TodoListContainerModule,
    AddTodoContainerModule,
    UpdateAvailableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
