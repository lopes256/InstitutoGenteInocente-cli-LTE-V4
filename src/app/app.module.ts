import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { SecurityModule } from './security/security.module';
import { TemplateModule } from './template/template.module';
import { PeopleModule } from './people/people.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { DataServiceService } from './utils/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    SecurityModule,
    PeopleModule
  ],
  providers: [
    DatePipe, { provide: LOCALE_ID, useValue: 'pt' },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
