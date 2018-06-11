import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedRouteModule } from './shared.routes';
import { ImagePipe } from '../../pipes/image.pipe';
import { ModalsComponent } from '../childs/modals/modals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from '../pages/login/auth.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/login/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedRouteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ImagePipe,
    ModalsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ImagePipe,
    ModalsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class SharedModule { }
