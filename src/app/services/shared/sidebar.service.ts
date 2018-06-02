import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Barra de progreso', route: '/progress'},
        {title: 'Temas', route: '/themes'},
        {title: 'Gráficas', route: '/charts'}
      ]
    }
  ];
  constructor() { }
}
