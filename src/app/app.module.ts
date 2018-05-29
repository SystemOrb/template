import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// APP COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesModule } from './components/pages/pages.module';
// END COMPONENTS

// ROUTES
import { APP_ROUTES } from './routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
