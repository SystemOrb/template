import { Injectable } from '@angular/core';
import { Hospital } from '../../models/hospital.models';
import { HttpClient } from '@angular/common/http';
import { HTTP_URL } from '../../config/config';
import { UserService } from '../users/user.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private _http: HttpClient, private userPermise: UserService) {
   }
   // Crear un hospital
   newHospital(h_name: Hospital) { // h_name es el id del admin
     const url = HTTP_URL + '/Hospital/' + h_name._id + '?token=' + this.userPermise.token;
      return this._http.post(url, h_name).pipe(
      map( (response: any)  => {
        return response;
      }),
    );
   }
   // Obtener todos los hospitales
   getAllHospitals() {
     const url = HTTP_URL + '/Hospital';
     return this._http.get(url).pipe(
        map( (response: any)  => {
          return response;
        })
      );
   }
   // Obtener un hospital en especifico
   getHospital(_hKey: string) {
    const url = HTTP_URL + '/Hospital/' + _hKey;
    return this._http.get(url).pipe(
      map( (response: any) => {
        return response;
      }),
    );
   }
   // Editar un hospital
   editHospital(hospital: Hospital) {
     const url = HTTP_URL + '/Hospital/' + hospital._id + '?token=' + this.userPermise.token;
     return this._http.put(url, hospital).pipe(
      map( (response: any)  => {
        return response;
      }),
    );
   }
   // Borrar hospital
   deleteHospital(hospital: Hospital) {
    const url = HTTP_URL + '/Hospital/' + hospital._id + '?token=' + this.userPermise.token;
    return this._http.delete(url).pipe(
     map( (response: any)  => {
       return response;
     }),
   );
  }
}
