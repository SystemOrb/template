import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../models/users.models';
import { HTTP_URL } from '../../config/config';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  _key: string;
  user: UserData;
  constructor(private _http: HttpClient) {
    this.loadWebData();
   }
   registerUser(user: UserData) {
     const url = HTTP_URL + '/Usuarios';
     return this._http.post(url, user).pipe(
        map( (response: any) => {
          return response;
        })
     );
   }
    /**************************************************************
    * Verificación de usuario si esta logeado o no
    **************************************************************/
    logged(): boolean {
      return (this.token.length > 10 && this.token !== '' && this.token !== undefined) ? true : false;
    }
    loadWebData() {
      this.token = localStorage.getItem('token') || '';
      this._key = localStorage.getItem('id') || '';
      this.user = JSON.parse(localStorage.getItem('user')) || null;
    }
    logout() {
      this.token = '';
      this._key = '';
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('user');
      return true;
    }
    /**************************************************************
    * Auth normal
    **************************************************************/
   loginUser(user: UserData) {
     const url = HTTP_URL + '/Auth';
     return this._http.post(url, user).pipe(
       map( (response: any)  => {
          this.saveLocalStorage(response.key._id, response.sessionAuth, response.key); // Backend Response
          return response.status;
       })
     );
   }
      /**************************************************************
    * Auth Google
    **************************************************************/
    loginGoogle(GoogleToken: string) {
      const url = HTTP_URL + '/Auth/Google';
      return this._http.post(url, {token: GoogleToken}).pipe(
        map( (response: any) => {
          this.saveLocalStorage(response.key._id, response.sessionAuth, response.key); // Backend Response
          return response.status;
        }),
      );
    }
   /**************************************************************
    * LOCALSTORAGE
    **************************************************************/
   saveLocalStorage(_id: string, token: string, user: UserData) {
      localStorage.setItem('id', _id);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user) );
      // Inicializamos para tener siempre el token y la id
      this.token = token;
      this._key = _id;
      this.user = user;
   }
}
