import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../header';
import { HeaderContainerComponent } from './header-container.component';

@NgModule({
  imports: [CommonModule, HeaderModule],
  declarations: [HeaderContainerComponent],
  exports: [HeaderContainerComponent],
})
export class HeaderContainerModule {}
