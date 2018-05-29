import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesComponent } from './pages.component';
import { AuthComponent } from './login/auth.component';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ]
})
export class PagesModule { }
