import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { UpdateAvailableModule, HeaderContainerModule } from './components';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirePerformanceModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule.enablePersistence({
      synchronizeTabs: true,
    }),
    AppStoreModule,
    AppRoutingModule,
    HeaderContainerModule,
    UpdateAvailableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
