import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
  //  {
 /*     title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Barra de progreso', route: '/progress'},
        {title: 'Temas', route: '/themes'},
        {title: 'Gráficas', route: '/charts'},
        {title: 'Promesas', route: '/promises'},
        {title: 'rxjs', route: '/rxjs'},
        {title: 'Perfil', route: '/profile'},
      ]
    },
    {
      title: 'Administración',
      icon: 'mdi mdi-account-settings-variant',
      submenu: [
        {title: 'Usuarios', route: '/usuarios'},
        {title: 'Hospitales', route: '/Hospital'},
        {title: 'Medicos', route: '/Medicos'},
      ]
    }*/
  ];
  constructor() { }
}
