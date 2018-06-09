import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../../models/users.models';
import { UserService } from '../../../../services/users/user.service';
import { ModalService } from '../../../../services/services.index';
declare var swal: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  offset: number;
  pagination: number = 0;
  USUARIOS: UserData[] = [];
  constructor(private _user: UserService, public _modalLogic: ModalService) {
    this.loadUsers();
  }

  ngOnInit() {
    /*
    Si emite un evento entonces refrescamos la tabla
    */
   this._modalLogic.refreshTable.subscribe(
     (response: any) => {
       this.loadUsers();
     }
   );
  }
  loadUsers() {
    this._user.getAllUsers(this.pagination).subscribe(
      (response: any) => {
        this.USUARIOS = response.usuarios;
        this.offset = response.flag;
      }
    );
  }
  changePage(pagination: number) {

    this.pagination += pagination;
    if (this.pagination >= this.offset) {
      this.pagination = 0;
    }
    if (this.pagination < 0) {
      this.pagination = 0;
    }
    this.loadUsers();
  }
  saveUser(usuario: UserData) {
    this._user.updateUserSpecif(usuario).subscribe(
      (response: any) => {
        console.log(response);
      },
    );
  }
  deleteUser(_key: string) {
    if (_key === this._user._key) {
      swal('Error!', 'No puedes borrarte a ti mismo', 'error');
      return;
    }
    swal({
      title: 'Estas seguro?',
      text: 'Estas seguro que desea borrar este usuario? No podrás deshacer esta acción',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( (willDelete) => {
      if (willDelete) {
        swal('Usuario borrado correctamente', {
          icon: 'success',
        });
        this._user.deleteUser(_key).subscribe(
          (response: any) => {
            console.log(response);
            this.loadUsers();
          }
        );
      } else {
        console.log('cancel');
      }
    });
  }
  // Esta función es para el servicio para trasladar la data a otro componente
  showModal(usuario: UserData) {
     this._modalLogic.showModalFunction(usuario._id, 'usuarios');
  }
}
