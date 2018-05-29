import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/login/register.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { PagesComponent } from './components/pages/pages.component';
import { AuthComponent } from './components/pages/login/auth.component';



const routes: Routes = [
    { path: '**', component: NotfoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( routes, {useHash: true} );
