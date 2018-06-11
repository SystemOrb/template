import { Component, OnInit } from '@angular/core';
import { HospitalesService } from '../../../../services/hospitales/hospitales.service';
import { UserService } from '../../../../services/users/user.service';
import { Hospital } from '../../../../models/hospital.models';
import { ModalService } from '../../../../services/modal/modal.service';
declare var swal: any;
@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitals: Hospital[] = [];
  constructor(private _hospitals: HospitalesService,
              private _user: UserService,
              private _modalLogic: ModalService) { }

  ngOnInit() {
    this.loadHospitals();
    this._modalLogic.refreshTable.subscribe(
      (response: any) => this.loadHospitals(),
    );
  }
  createHospital() {
    swal('Write something here:', {
      content: 'input',
      text: 'Introduce el nombre del hospital',
      icon: 'info',
      buttons: true,
      dangerMode: true,
    })
    .then((value) => {
      if (!value) {
        return;
      }
      const hospital = new Hospital(value, this._user._key);
      this._hospitals.newHospital(hospital).subscribe(
        (response: any) => {
          this.loadHospitals();
        }
      );
    });
  }
  loadHospitals() {
    this._hospitals.getAllHospitals().subscribe(
      (response: any) => {
        this.hospitals = response.hospitals;
      }
    );
  }
  removeHospital(hospital: Hospital) {
    swal({
      title: 'Estas seguro?',
      text: 'Estás seguro que desea borrar el ' + hospital.nombre + ' No podrás deshacer esta acción',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( (willDelete) => {
      if (willDelete) {
        swal('Hospital borrado correctamente', {
          icon: 'success',
        });
        this._hospitals.deleteHospital(hospital).subscribe(
          (response: any) => this.loadHospitals(),
        );
      } else {
        console.log('cancel');
      }
    });
  }
  editHospital(hospital: Hospital) {
    this._hospitals.editHospital(hospital).subscribe(
      (response: any) => this.loadHospitals(),
    );
  }
  // PARA LA FOTO
  showModal(hospital: Hospital) {
     this._modalLogic.showModalFunction(hospital._id, 'Hospital');
  }
}
