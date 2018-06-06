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



const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Panel de control'} },
            { path: 'about', component: AboutComponent, data: {title: 'Perfil'}  },
            { path: 'contact', component: ContactComponent, data: {title: 'Contacto'}  },
            { path: 'progress', component: ProgressComponent, data: {title: 'Barra de progreso'}  },
            { path: 'charts', component: ChartComponent, data: {title: 'Gráficas'}  },
            { path: 'themes', component: ThemeComponent, data: {title: 'Temas'}  },
            { path: 'promises', component: PromisesComponent, data: {title: 'Promesas'}  },
            { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJS'}  },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

 export class PagesRoutingModule {}
