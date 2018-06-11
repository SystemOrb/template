import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Hospital } from '../../../../models/hospital.models';
import { HospitalesService } from '../../../../services/hospitales/hospitales.service';
import { MedicoService } from '../../../../services/medicos/medico.service';
import { UserService } from '../../../../services/services.index';
import { Medico } from '../../../../models/medicos.models';
import { Router,  ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../services/modal/modal.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'

})
export class MedicoComponent implements OnInit {
  form: FormGroup;
  nombre: string;
  Hospital: string;
  hospitales: Hospital[] = [];
  image: string = 'xxx';
  imageHospital: string = 'xxx';
  urlGet: string;
  constructor(private _hospital: HospitalesService,
              private _medicos: MedicoService,
              private _user: UserService,
              private route: Router,
              private params: ActivatedRoute,
              private _modalLogic: ModalService) {

              // Verificamos al URL y seteamos la data
              this.params.params.subscribe( (resp: any) => {
                this.urlGet = resp['id'];
                if (resp['id'] !== 'nuevo') {
                  this._medicos.getSpecifMedic(resp['id']).subscribe(
                    (response: any) => {
                      this.nombre = response.medico.nombre;
                      this.Hospital = response.medico.hospital;
                      this.image = response.medico.img;
                      // Setear la imagen del hospital
                      this._hospital.getHospital(response.medico.hospital).subscribe(
                        (hospitalThumbnail: any) => {
                          this.imageHospital = hospitalThumbnail.hospitales.img;
                        }
                      );
                    }
                  );
                }
              });
    }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(this.nombre, [Validators.required]),
      Hospital: new FormControl(this.Hospital, [Validators.required])
    }
  );
  this.loadHospital();
  // Pendientes de una actualización en la foto
  this._modalLogic.refreshTable.subscribe(
    (response: any) => {
      this.image = response.usuario.img;
    }
  );
  }
createMedico() {
  if (!this.form.valid) {
    return;
  }
  if (this.urlGet === 'nuevo') {
    const newMedico = new Medico(this.form.value.nombre, this._user._key, this.form.value.Hospital);
    this._medicos.createMedico(newMedico).subscribe(
      (response: any) => {
          this.route.navigate(['/Medico', response.medicos._id]);
      }
    );
  } else {
    const newMedico = new Medico(this.form.value.nombre, null, this.Hospital);
    this._medicos.editMedico(newMedico, this.urlGet).subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }
}
loadHospital() {
  this._hospital.getAllHospitals().subscribe(
    (response: any) => this.hospitales = response.hospitals
  );
}
loadHospitalById(_id: string) {
  this._hospital.getHospital(_id).subscribe(
    (response: any) => {
      this.imageHospital = response.hospitales.img;
    }
  );
}
// Para verificar LA URL Y setear automaticamente la data
showModal() {
  if (this.urlGet !== 'nuevo') {
    this._modalLogic.showModalFunction(this.urlGet, 'Medicos');
  }
}

}
