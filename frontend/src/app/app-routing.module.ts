import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component'; 
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { ResultComponent } from './result/result.component';  

const routes: Routes = [ { path: '', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'analyze', component: AnalyzeComponent},
  { path: 'hardwareDetails', component: HardwareDetailsComponent},
  { path: 'history/details', component: HistoryDetailsComponent},
  { path: 'analyze/result', component: ResultComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
