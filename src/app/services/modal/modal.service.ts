/*
Servicio de modal que se encarga de ser intermediario entre componentes
*/
import { Injectable, EventEmitter } from '@angular/core';
import { ArchivosService } from '../archivos/archivos.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public showModal: boolean = false; // Este es el valor booleano que hara un show/hide del modal
  public _id: string; // recibimos la ID desde el componente padre
  public collection: string; // Mandamos la colección
  public fileItem: File; // Recibimos el File del componenente Child (ModalComponent)
  public refreshTable = new EventEmitter<any>(); // Para escuchar eventos
  constructor(private _upload: ArchivosService) { }

  HideModal() {
    // Si invocamos esta función destruimos totalmente la data del modal, reiniciando todo al cerrarlo
    this.showModal = false;
    this._id = null;
    this.collection = null;
  }
  // Seteamos la data que traemos del componente padre, para mantener la data constante
  showModalFunction( _id: string, collection: string) {
    this.showModal = true;
    this._id = _id;
    this.collection = collection;

  }
  // Llamamos el servicio que se encarga de subir archivos y le mandamos los parametros y emitimos la respuesta
  uploadFile() {
    this._upload.uploadFile2(this.fileItem, this.collection, this._id).subscribe(
      (response: any) => {
        this.refreshTable.emit(response);
        this.HideModal();
      },
    );
  }
}
