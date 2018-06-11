import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HTTP_URL } from '../../../config/config';
import { Medico } from '../../../models/medicos.models';
import { UserData } from '../../../models/users.models';
import { Hospital } from '../../../models/hospital.models';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styles: []
})
export class ExplorerComponent implements OnInit {
  Medicos: Medico[] = [];
  Usuarios: UserData[] = [];
  Hospitales: Hospital[] = [];
  constructor(private _param: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit() {
    this.explorer();
  }
  explorer() {
    this._param.params.subscribe(
      (response: any) => {
         const url = HTTP_URL + '/search/all/' + response['query'];
         this._http.get(url).subscribe(
           (data: any) => {
             this.Usuarios = data.Usuarios;
             this.Hospitales = data.Hospitales;
             this.Medicos = data.Doctores;
             console.log(data);
           }
         );
      }
    );
  }
}
