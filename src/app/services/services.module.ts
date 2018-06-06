import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SidebarService, SettingsService, UserService, LoginGuard } from './services.index';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SettingsService,
    UserService,
    LoginGuard
  ],
  declarations: []
})
export class ServicesModule { }
