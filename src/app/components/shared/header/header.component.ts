import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users/user.service';
import { Router } from '@angular/router';
import { UserData } from '../../../models/users.models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  USUARIO: UserData;
  constructor(public _user: UserService, private _route: Router) {
    this.USUARIO = _user.user;
   }

  ngOnInit() {
  }

  logout() {
    if (this._user.logout()) {
      this._route.navigate(['/auth']);
    } else {
      console.error('ERROR al intentar cerrar sesión');
    }
  }
  search(query: string) {
    this._route.navigate(['/search', query]);
  }

}
