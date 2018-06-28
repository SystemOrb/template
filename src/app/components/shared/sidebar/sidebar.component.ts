import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/shared/sidebar.service';
import { UserService } from '../../../services/users/user.service';
import { UserData } from '../../../models/users.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  USUARIO: UserData;
  constructor(public _menu: SidebarService, private _user: UserService) {
    this.USUARIO = _user.user;
  }

  ngOnInit() {
  }

}
