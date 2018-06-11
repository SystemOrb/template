import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services.index';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _user: UserService, private _router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this._user.user.role === 'ADMIN_ROLE') {
      return true;
    } else {
      this._user.logout();
      this._router.navigate(['/auth/login']);
      return false;
    }
  }
}
