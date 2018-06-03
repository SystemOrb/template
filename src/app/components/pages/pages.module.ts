import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


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
import { ProgressComponent } from './progress/progress.component';
import { IncrementorComponent } from '../childs/incrementor/incrementor.component';
import { ChartComponent } from './chart/chart.component';
import { DonasComponent } from '../childs/donas/donas.component';
import { ThemeComponent } from './theme/theme.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule

  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ProgressComponent,
    IncrementorComponent,
    ChartComponent,
    DonasComponent,
    ThemeComponent,
    PromisesComponent,
    RxjsComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    IncrementorComponent,
    DonasComponent

  ]
})
export class PagesModule { }
