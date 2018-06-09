import { Pipe, PipeTransform } from '@angular/core';
import { HTTP_URL } from '../config/config';
@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, collection: string = 'usuarios'): string {
      // Construirmos la URL
      let url = HTTP_URL + '/imgs/';
      if (!value) {
        return url += '/usuarios/not-image.jpg' ;
      }
      if (value.indexOf('https') >= 0) { // Para verificar la URL si es de Google
        return value;
      }
      switch (collection) {
        case 'usuarios':
          url += 'usuarios/' + value;
        break;
        case 'Medicos':
         url += 'Medicos/' + value;
        break;
        case 'Hospital':
        url += 'Hospital/' + value;
        break;
        default : console.error('Tipo de busqueda invalido');
      }
      return url;
  }
}
