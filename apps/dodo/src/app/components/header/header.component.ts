import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

import { User } from '../../models';

@Component({
  selector: 'nmg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public user?: User;

  @Output() public signOut = new EventEmitter<void>();

  public onSignOut(): void {
    this.signOut.emit();
  }
}
