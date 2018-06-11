import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_URL } from '../../config/config';
import { map } from 'rxjs/operators';
import { Medico } from '../../models/medicos.models';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private _http: HttpClient, private _user: UserService) { }

  // Todos los medicos
  // DataTables
 getAllMedicals() {
   const url = HTTP_URL + '/Medicos';
   return this._http.get(url).pipe(
     map( (response: any) => {
        return response;
     }),
   );
 }
 // Component unique
 getSpecifMedic(_id: string) {
  const url = HTTP_URL + '/Medicos/' + _id;
  return this._http.get(url).pipe(
    map( (response: any)  => {
      return response;
    }),
  );
 }
 // Crear medico nuevo
 // Nuevo medico
 createMedico(medico: Medico) {
  let url = HTTP_URL + '/Medicos/' + medico.usuario + '/' + medico.hospital;
  url += '?token=' + this._user.token;
  return this._http.post(url, medico).pipe(
    map( (response: any)  => {
      return response;
    }),
  );
 }
 // Editar medico
 editMedico(medico: Medico, _id: string) {
   const url = HTTP_URL + '/Medicos/' + _id + '?token=' + this._user.token;
   return this._http.put(url, medico).pipe(
    map( (response: any)  => {
      return response;
    }),
  );
 }
 // Eliminar medico
 deleteMedico(_id: string) {
  const url = HTTP_URL + '/Medicos/' + _id + '?token=' + this._user.token;
  return this._http.delete(url).pipe(
    map( (response: any)  => {
      return response;
    }),
  );
 }

}
