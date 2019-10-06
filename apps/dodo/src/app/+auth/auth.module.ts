import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutModule } from './components';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, AuthLayoutModule],
})
export class AuthModule {}
