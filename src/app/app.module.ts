import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,

   // DonasComponent

  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ServicesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
