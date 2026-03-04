import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component'; 
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'analyze', component: AnalyzeComponent, canActivate: [AuthGuard] },
  { path: 'hardwareDetails', component: HardwareDetailsComponent, canActivate: [AuthGuard] },
  { path: 'history/details', component: HistoryDetailsComponent, canActivate: [AuthGuard] },
  { path: 'analyze/result', component: ResultComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
