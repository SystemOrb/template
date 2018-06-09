import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService,
   SidebarService,
    SettingsService,
     UserService,
      LoginGuard,
       ArchivosService,
      ModalService } from './services.index';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SettingsService,
    UserService,
    LoginGuard,
    ArchivosService,
    ModalService
  ],
  declarations: []
})
export class ServicesModule { }
