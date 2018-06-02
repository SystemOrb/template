import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartComponent } from './chart/chart.component';
import { ThemeComponent } from './theme/theme.component';



const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'about', component: AboutComponent  },
            { path: 'contact', component: ContactComponent  },
            { path: 'progress', component: ProgressComponent  },
            { path: 'charts', component: ChartComponent  },
            { path: 'themes', component: ThemeComponent  },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

 export class PagesRoutingModule {}
