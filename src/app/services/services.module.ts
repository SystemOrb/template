import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService,
   SidebarService,
    SettingsService,
     UserService,
      LoginGuard,
       ArchivosService,
      ModalService,
    HospitalesService,
  MedicoService,
  AdminGuard,
RenovaTokenGuard} from './services.index';
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
    ModalService,
    HospitalesService,
    MedicoService,
    AdminGuard,
    RenovaTokenGuard
  ],
  declarations: []
})
export class ServicesModule { }
