// Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 // Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { PagesComponent } from './pages.component';
import { AuthComponent } from './login/auth.component';
import { ModalsComponent } from '../childs/modals/modals.component';
import { HospitalesComponent } from './admin/hospitales/hospitales.component';
import { MedicosComponent } from './admin/medicos/medicos.component';
import { MedicoComponent } from './admin/medicos/medico.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { DonasComponent } from '../childs/donas/donas.component';
import { IncrementorComponent } from '../childs/incrementor/incrementor.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartComponent } from './chart/chart.component';
import { ThemeComponent } from './theme/theme.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { ExplorerComponent } from './explorer/explorer.component';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';

// Providers
import { ImagePipe } from '../../pipes/image.pipe';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [
   // PagesComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    // AuthComponent,
    // LoginComponent,
    // RegisterComponent,
    // NotfoundComponent,
    ProgressComponent,
    IncrementorComponent,
    ChartComponent,
    DonasComponent,
    ThemeComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    MedicosComponent,
    HospitalesComponent,
    // ModalsComponent,
    MedicosComponent,
    MedicoComponent,
    ExplorerComponent
  ],
  exports: [
   // PagesComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
   // AuthComponent,
    // LoginComponent,
    // RegisterComponent,
    // NotfoundComponent,
    IncrementorComponent,
    DonasComponent,
    // ModalsComponent,
    MedicosComponent,
    MedicoComponent,
    ExplorerComponent

  ]
})
export class PagesModule { }
