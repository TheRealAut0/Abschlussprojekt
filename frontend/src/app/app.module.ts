import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryComponent } from './history/history.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { ApiService } from './api.service';
import { AuthInterceptor } from './auth.interceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SearchFieldComponent } from './search-field/search-field.component';
import { HardwareCreateComponent } from './hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { FormsModule } from '@angular/forms';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { ResultComponent } from './result/result.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingScreenSpinnerComponent } from './loading-screen-spinner/loading-screen-spinner.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HistoryComponent,
    AnalyzeComponent,
    SearchFieldComponent,
    HardwareCreateComponent,
    HardwareListComponent,
    HardwareDetailsComponent,
    HistoryDetailsComponent,
    ResultComponent,
    LoadingScreenComponent,
    AlertComponent,
    LoadingScreenSpinnerComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
