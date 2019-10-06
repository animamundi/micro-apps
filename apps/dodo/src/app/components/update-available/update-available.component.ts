import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'nmg-update-available',
  templateUrl: './update-available.component.html',
  styleUrls: ['./update-available.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateAvailableComponent {
  constructor(
    private readonly swUpdate: SwUpdate,
    private readonly dialogRef: MatDialogRef<UpdateAvailableComponent>,
  ) {}

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onUpdate(): void {
    this.swUpdate.activateUpdate().then(() => {
      document.location.reload();
    });
  }
}
