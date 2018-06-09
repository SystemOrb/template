
/*
Componente modal que se encarga de extraer data de los componentes padres y ser un
intermediario y mandar data a servicios
Este ejemplo es universal debido a que podemos trabajar
Componentes Padre-Hijo y conectarlo como un intermediario

Es equivalente al metodo Input y Output
*/
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { UserData } from '../../../models/users.models';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {
    /*
  Images
  */
 image: File;
 imagePreview: string; // Para luego mandarlo a otros componentes

  constructor(public _modalLogic: ModalService) { }

  ngOnInit() {
  }
  pictureChanged(file: File) {
    /*
    Esta función es del evento change que cada vez que
    hace el usuario un cambio en la data
    seteamos, verificamos, y mandamos el file a una variable
    para luego ser trasladada a otros componentes
    esto es importante
    */
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
    this._modalLogic.fileItem = this.image;
    // Para el preview de la imagen debemos leer cada archivo procesado
    const reader = new FileReader();
    const urlImagePreview = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imagePreview = reader.result;
    };
  }
  // Estas funciones son del servicio principal
   closeModal() {
    this._modalLogic.HideModal();
   }
   uploadFileComponent() {
     this._modalLogic.uploadFile();
   }
}
