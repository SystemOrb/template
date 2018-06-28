import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { PagesComponent } from './components/pages/pages.component';
import { LoginGuard } from './services/services.index';



const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        loadChildren: './components/pages/pages.module#PagesModule'
    },
    { path: '**', component: NotfoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( routes, {useHash: true} );
