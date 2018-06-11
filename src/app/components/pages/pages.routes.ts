import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartComponent } from './chart/chart.component';
import { ThemeComponent } from './theme/theme.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../../services/services.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { HospitalesComponent } from './admin/hospitales/hospitales.component';
import { MedicosComponent } from './admin/medicos/medicos.component';
import { MedicoComponent } from './admin/medicos/medico.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AdminGuard } from '../../services/GUARDS/admin.guard';



const routes: Routes = [
 /*       path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [ */
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Panel de control'} },
            { path: 'about', component: AboutComponent, data: {title: 'Perfil'}  },
            { path: 'contact', component: ContactComponent, data: {title: 'Contacto'}  },
            { path: 'progress', component: ProgressComponent, data: {title: 'Barra de progreso'}  },
            { path: 'charts', component: ChartComponent, data: {title: 'Gráficas'}  },
            { path: 'themes', component: ThemeComponent, data: {title: 'Temas'}  },
            { path: 'promises', component: PromisesComponent, data: {title: 'Promesas'}  },
            { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJS'}  },
            { path: 'profile', component: ProfileComponent, data: {title: 'Perfil'}  },
            // admin routes
            { path: 'usuarios', component: UsuariosComponent,
              canActivate: [AdminGuard],
              data: {title: 'Usuarios Registrados'}
            },
            { path: 'Hospital',
             canActivate: [AdminGuard],
             component: HospitalesComponent,
             data: {title: 'Hospitales Registrados'}
             },
            { path: 'Medicos',
            canActivate: [AdminGuard],
            component: MedicosComponent,
            data: {title: 'Medicos Registrados'}
            },
            { path: 'Medico/:id',
            canActivate: [AdminGuard],
            component: MedicoComponent,
            data: {title: 'Actualizar medico'}
        },
            { path: 'search/:query', component: ExplorerComponent, data: {title: 'Buscador'}  },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        /*]
    },*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

 export class PagesRoutingModule {}
