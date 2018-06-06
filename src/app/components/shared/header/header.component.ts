import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private _user: UserService, private _route: Router) { }

  ngOnInit() {
  }

  logout() {
    if (this._user.logout()) {
      this._route.navigate(['/auth']);
    } else {
      console.error('ERROR al intentar cerrar sesión');
    }
  }

}
