import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// APP COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesModule } from './components/pages/pages.module';
// END COMPONENTS
import { ChartsModule } from 'ng2-charts';
// ROUTES
import { APP_ROUTES } from './routes';

// import { DonasComponent } from './components/childs/donas/donas.component';
import { ServicesModule } from './services/services.module';
import { PagesComponent } from './components/pages/pages.component';
import { SharedModule } from './components/shared/shared.module';
import { AuthComponent } from './components/pages/login/auth.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/login/register.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';



/*
Quitamos el pagesModule porque lo carga con lazyLoad
esto es siempre que queramos cargar los componentes necesarios
*/

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    // AuthComponent,
    NotfoundComponent

   // DonasComponent

  ],
  imports: [
    BrowserModule,
  //  PagesModule,
    APP_ROUTES,
    FormsModule,
    ServicesModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
