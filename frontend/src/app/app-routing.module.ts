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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent},
  { path: 'analyze', component: AnalyzeComponent},
  { path: 'hardwareDetails', component: HardwareDetailsComponent},
  { path: 'history/details', component: HistoryDetailsComponent},
  { path: 'analyze/result', component: ResultComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
