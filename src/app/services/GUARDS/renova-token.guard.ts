import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services.index';

@Injectable({
  providedIn: 'root'
})
export class RenovaTokenGuard implements CanActivate {
  constructor(private _user: UserService, private _route: Router) {}
  canActivate(): Promise<boolean> | boolean {
    const token = this._user.token;
    // Constatne para decodificar el token y acceder a la data
    const payload = JSON.parse( atob(token.split('.')[1]));
    if (this.verifyExpireToken(payload.exp)) {
      this._route.navigate(['/auth']);
      return false;
    }
    return this.renewToken(payload.exp);
  }
  verifyExpireToken( seconds: number): boolean | void {
    if (seconds < (new Date().getTime()) / 1000) {
      return true;
    } else {
      return false;
    }
    // Si pasa esta validación entonces hacemos la función de renovar token
  }
  renewToken(expire: number): Promise<boolean> | Promise<any> {
    return new Promise( (resolve, reject)  => {
      const tokenExp = new Date( expire * 1000 );
      const TimeNow = new Date();
      TimeNow.setTime( TimeNow.getTime() + (4 * 60 * 60 * 1000) );
      if (tokenExp.getTime() > TimeNow.getTime()) {
         resolve(true);
      } else {
        // Sino entonces renueva el token
        this._user.renovaToken().subscribe(
          (resp: any) => {
            resolve(true);
          }, (error: any) => {
            reject(false);
            this._route.navigate(['/auth']);
          }
        );
      }
    });
  }
}
