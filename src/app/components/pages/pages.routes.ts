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
import { RenovaTokenGuard } from '../../services/GUARDS/renova-token.guard';



const routes: Routes = [
 /*       path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [ */
            { path: 'dashboard', canActivate: [RenovaTokenGuard], component: DashboardComponent, data: {title: 'Panel de control'} },
            { path: 'about', canActivate: [RenovaTokenGuard], component: AboutComponent, data: {title: 'Perfil'}  },
            { path: 'contact', canActivate: [RenovaTokenGuard], component: ContactComponent, data: {title: 'Contacto'}  },
            { path: 'progress', canActivate: [RenovaTokenGuard], component: ProgressComponent, data: {title: 'Barra de progreso'}  },
            { path: 'charts', canActivate: [RenovaTokenGuard], component: ChartComponent, data: {title: 'Gráficas'}  },
            { path: 'themes', canActivate: [RenovaTokenGuard], component: ThemeComponent, data: {title: 'Temas'}  },
            { path: 'promises', canActivate: [RenovaTokenGuard], component: PromisesComponent, data: {title: 'Promesas'}  },
            { path: 'rxjs', canActivate: [RenovaTokenGuard], component: RxjsComponent, data: {title: 'RxJS'}  },
            { path: 'profile', canActivate: [RenovaTokenGuard], component: ProfileComponent, data: {title: 'Perfil'}  },
            // admin routes
            { path: 'usuarios', component: UsuariosComponent,
              canActivate: [AdminGuard, RenovaTokenGuard],
              data: {title: 'Usuarios Registrados'}
            },
            { path: 'Hospital',
             canActivate: [AdminGuard, RenovaTokenGuard],
             component: HospitalesComponent,
             data: {title: 'Hospitales Registrados'}
             },
            { path: 'Medicos',
            canActivate: [AdminGuard, RenovaTokenGuard],
            component: MedicosComponent,
            data: {title: 'Medicos Registrados'}
            },
            { path: 'Medico/:id',
            canActivate: [AdminGuard, RenovaTokenGuard],
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
