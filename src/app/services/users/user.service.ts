import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../models/users.models';
import { HTTP_URL } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { ArchivosService } from '../archivos/archivos.service';
import swal from 'sweetalert';
import { SidebarService } from '../services.index';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  _key: string;
  user: UserData;
  constructor(private _http: HttpClient,
    private fileService: ArchivosService,
    private menu: SidebarService,
    private _route: Router) {
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
          this.menu.menu = response.menu;
          return response.status;
       }),
       catchError( (errorCatchable: any) => {
        swal({
          title: 'Error',
          text: errorCatchable.error.message,
          icon: 'error',
        });
          console.log(errorCatchable.error.message);
          return new Observable<any>();
       })
     );
   }
    /**************************************************************
    * Update User
    **************************************************************/
     updateUser(user: UserData) {
       const url = HTTP_URL + '/Usuarios/' + this._key + '?token=' + this.token;
       return this._http.put(url, user).pipe(
        map((response: any) => {
          this.saveLocalStorage(this._key, this.token, response.uData);
          return response.status;
        }),
       );
     }
     updateUserSpecif(user: UserData) {
      const url = HTTP_URL + '/Usuarios/' + user._id + '?token=' + this.token;
      return this._http.put(url, user).pipe(
       map((response: any) => {
         return response.status;
       }),
      );
    }
    /**************************************************************
    * Update User photo
    **************************************************************/
     updateProfilePicture(image: File, _id: string) {
        this.fileService.uploadFile(image, 'usuarios', _id)
        .then( (response: any)  => {
           this.saveLocalStorage(_id, this.token, response.usuario);
           swal({
            title: 'Foto actualizada',
            text: 'Tu foto de perfil ha sido actualizada',
            icon: 'success',
          });
        })
        .catch( (response: any) => {
          console.error(response);
        });
     }
     updateProfilePictureResumed(image: File, _id: string) {
       this.fileService.uploadFile2(image, 'usuarios', _id).subscribe(
         (response: any) => {
          this.saveLocalStorage(_id, this.token, response.usuario);
          swal({
            title: 'Foto actualizada',
            text: 'Tu foto de perfil ha sido actualizada',
            icon: 'success',
          });
         },
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
          this.menu.menu = response.menu;
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
   /**************************************************************
    * OBTENER TODOS LOS USUARIOS
    **************************************************************/
   getAllUsers(offset: number) {
     const url = HTTP_URL + '/Usuarios?offset=' + offset;
     return this._http.get(url).pipe(
       map( (response: any) => {
           return response;
       })
     );
   }
   /**************************************************************
    * DELETE USER
    **************************************************************/
   deleteUser(_id: string) {
      const url = HTTP_URL + '/Usuarios/' + _id + '?token=' + this.token;
      return this._http.delete(url).pipe(
        map( (response: any)  => {
          return response;
        }),
      );
   }
    /**************************************************************
    * Renovar el token automaticamente
    **************************************************************/
   renovaToken() {
     const url = HTTP_URL + '/Usuarios/reloadToken?token=' + this.token;
     return this._http.get(url).pipe(
       map( (response: any) => {
         return response;
       }), catchError( (error: any) => {
         this.logout();
         this._route.navigate(['/auth']);
         return new Observable<any>();
       })
     );
   }
}
