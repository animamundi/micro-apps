import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { UpdateAvailableComponent } from './update-available.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [UpdateAvailableComponent],
  exports: [UpdateAvailableComponent],
  entryComponents: [UpdateAvailableComponent],
})
export class UpdateAvailableModule {}
