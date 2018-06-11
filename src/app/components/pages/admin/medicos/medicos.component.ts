import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../../../services/medicos/medico.service';
import { Medico } from '../../../../models/medicos.models';
declare const swal: any;
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
  Medicos: Medico[] = [];
  constructor(private _medico: MedicoService) { }

  ngOnInit() {
    this.loadMedicos();
  }
  loadMedicos() {
    this._medico.getAllMedicals().subscribe(
      (response: any) => {
        this.Medicos = response.medicos;
      }
    );
  }
  deleteMedico(medico: Medico) {
    swal({
      title: 'Estas seguro?',
      text: 'Estás seguro que desea borrar a ' + medico.nombre + ' No podrás deshacer esta acción',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( (willDelete) => {
      if (willDelete) {
        swal('Medico borrado correctamente', {
          icon: 'success',
        });
        this._medico.deleteMedico(medico._id).subscribe(
          (response: any) => this.loadMedicos()
        );
      } else {
        console.log('cancel');
      }
    });
  }
}
