import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nmg-todo-layout',
  templateUrl: './todo-layout.component.html',
  styleUrls: ['./todo-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
