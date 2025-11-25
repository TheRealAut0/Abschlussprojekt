import { Component } from '@angular/core';
import { AlertService, Alert } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(private alertService: AlertService) {}

  alert$ = this.alertService.alert$;
  progress$ = this.alertService.progress$;
  
  closeAlert() {
    this.alertService.clearAlert();
  }
  
}
