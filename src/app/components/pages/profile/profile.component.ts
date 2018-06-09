import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../models/users.models';
import { UserService } from '../../../services/users/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  email: string;
  name: string;
  GOOGLE: boolean;
  userProfile: UserData;
  /*
  Images
  */
  image: File;
  imagePreview: string;
  constructor(private _user: UserService, private _route: Router) {
    const actualData: UserData = this._user.user;
    this.email = actualData.email;
    this.name = actualData.nombre;
    this.GOOGLE = actualData.GOOGLE;
    this.userProfile = actualData;
  }

  ngOnInit() {
  }
  updateUser() {
    let email_: string = '';
    if (this.GOOGLE) {
       email_ = null;
    } else {
       email_ = this.email;
    }
    const user = new UserData(this.name, email_, null);
    this._user.updateUser(user).subscribe(
      (response: boolean) => {
        if (response) {
          this._route.navigate(['/profile']);
        }
      }
    );
  }
  /* Función para determinar cuando la foto cambia de estado */
  pictureChanged(file: File) {
    console.log(file);
    if (!file) {
      this.image = null;
      return;
    }
    // Verificamos si es una imagen
    if (file.type.indexOf('image') < 0) {
      swal({
        title: 'Error',
        text: 'Debes introducir un formato de archivo valido',
        icon: 'error',
      });
      this.image = null;
      return;
    }
    this.image = file;
    // Para el preview de la imagen debemos leer cada archivo procesado
    const reader = new FileReader();
    const urlImagePreview = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imagePreview = reader.result;
    };
  }
  // Para cargar la imagen
  upload() {
    this._user.updateProfilePictureResumed(this.image, this._user._key);
  }
}

