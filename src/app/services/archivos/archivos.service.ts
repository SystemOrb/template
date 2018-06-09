/*
SERVICIO MUY IMPORTANTE PARA CARGAR IMAGENES
*/
import { Injectable } from '@angular/core';
import { HTTP_URL } from '../../config/config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private _http: HttpClient) { }
  // Collection = Nombre de la coleccion de la bbdd
  // http://localhost:3000/upload/usuarios/5b14a81fae343959a97f9020
  /*
  Metodo Largo con AJAX de JS
  */
  uploadFile(file: File, collection: string, _id: string) {
    return new Promise( (resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      // Anexamos el input file de postman en el formData
      formData.append('image', file, file.name);
      // Ejecutamos el XHR de AJAX
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('imagen subida');
            resolve( JSON.parse(xhr.response) );
          } else {
            console.error('Fallo al cargar imagen');
            reject( xhr.response );
          }
        }
      };
      const url = HTTP_URL + '/upload/' + collection + '/' + _id;
      xhr.open('PUT', url, true);
      xhr.send( formData );
    });
  }
  /*
  Metodo Corto propuesta por un estudiante
  */
  uploadFile2(file: File, collection: string, _id: string) {
    const url = HTTP_URL + '/upload/' + collection + '/' + _id;
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this._http.put(url, formData, {reportProgress: true});
  }
}
