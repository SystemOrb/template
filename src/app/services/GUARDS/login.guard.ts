import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services.index';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _user: UserService, private _route: Router) {
  }
  canActivate() {
    if (this._user.logged()) {
      return true;
    } else {
      this._route.navigate(['/auth']);
    }
  }

}
