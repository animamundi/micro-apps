import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'nmg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public user$?: Observable<User | null>;

  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  public ngOnInit(): void {
    this.user$ = this.angularFireAuth.user;
  }

  public onLogout(): void {
    this.angularFireAuth.auth.signOut();
  }
}
