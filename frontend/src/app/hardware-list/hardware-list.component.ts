import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

interface Employee {
  id: Number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
}

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {
  @Input() hardwarelists: any[] = [];
  employees: Employee[] = [];
  loadingList: boolean = true;
  HardwareStatuses: any = [];
  isonloan:boolean = false;
  inputName: string = '';
  vorschlaege: Employee[] = [];
  inputFocused = false;
  selectedEmployeeId: number | null = null;
  constructor(private apiService: ApiService, private router: Router, private alertService: AlertService) {}
   @Output() submittedsuccess = new EventEmitter<void>(); 
   @Output() submittederror = new EventEmitter<void>(); 
 
  ngOnInit() {
    // 🔹 Benutzer-Daten abrufen
    this.getHardwarelist();
    this.getEmployees();
    this.getHardwareStatuses();

  }
  
  getHardwarelist(){
    this.apiService.get<any[]>('hardware_inventory/list').subscribe({
      next: (data) => {
        this.hardwarelists = data;
        this.loadingList =false;
        console.log(this.hardwarelists);
      },
      error: (err) => console.error('Fehler beim Laden der Benutzer:', err)
    });
  }



  
  onInputChange(hardware: any, index: number, event: Event) {
    const Element = event.target as HTMLInputElement;
  
    // Einzelnen neuen Wert merken
    switch (index) {
      case 1:
        hardware.NewLends_out_at = Element.value ?? "";
        break;
      case 2:
        hardware.NewEmployee_id = Element.value ?? "";
        break;
      case 3:
        hardware.Newstatus_id = Number(Element.value ?? 0);
        if(hardware.Newstatus_id == 1 || hardware.Newstatus_id == 3 ){hardware.NewLends_out_at = null; hardware.NewEmployee_id = null;}
        break;
    }
     
    const statusIdChanged = Number(hardware.status_id ?? 0) !== Number(hardware.Newstatus_id);
  
    hardware.changed = statusIdChanged;
  console.log(hardware.NewLends_out_at , hardware.NewEmployee_id )
  console.log(hardware.lends_out_at , hardware.employee_id )
    // Debug
    console.log("Änderungsstatus:");
    console.log("- status_id:", statusIdChanged);
    console.log("→ hardware.changed =", hardware.changed);
  }
  
  

  // Speichert Änderungen und versteckt den Speichern-Button
  saveChanges(hardware: any) {
    console.log("Änderungen gespeichert für:", hardware);
    hardware.changed = false;
    console.log(hardware);

    this.apiService.put(`hardware_inventory/${hardware.id}`, {status_id: hardware.Newstatus_id, lends_out_at: hardware.NewLends_out_at, employee_id: hardware.selectedEmployeeId, user_id: 4}).subscribe({
      next: (response) => {
        console.log("Erfolgreich gesendet!", response);
        this.submittedsuccess.emit();

      },
      error: (error) => {
        console.error("Fehler beim Senden:", error);
        this.submittederror.emit();
      }
    });
  }

  getEmployees(){
    this.apiService.get<any[]>('employees/').subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => console.error('Fehler beim Laden der Mitarbeitern:', err)
    });
  }

  getHardwareStatuses(){
    this.apiService.get<any[]>('hardware-statuses/').subscribe({
      next: (data) => {
        this.HardwareStatuses = data;
        console.log(this.HardwareStatuses);
      },
      error: (err) => console.error('Fehler beim Laden der HardwareStatuses:', err)
    });
  }


  showhardwaredetails(id: number): void {
    this.router.navigate(['hardwareDetails'], { queryParams: { id: id } });
  }


  showSuccess(msg: string) {
    this.alertService.showAlert('success', msg);
  }
  
  showError(msg: string) {
    this.alertService.showAlert('error', msg);
  }

  onEmployeeInputChange(hardware: any) {
    const input = hardware.inputName.toLowerCase();
    if(input == ""){
      hardware.selectedEmployeeId = null;
    }
    hardware.vorschlaege = this.employees.filter(emp => {
      const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase();
      return fullName.includes(input);
    });
    console.log(hardware.selectedEmployeeId )
  }
  
  setName(emp: Employee, hardware: any) {
    hardware.inputName = `${emp.first_name} ${emp.last_name}`;
    hardware.selectedEmployeeId = Number(emp.id);
    hardware.vorschlaege = [];
  }
  
  onBlur(hardware: any) {
    setTimeout(() => {
      hardware.inputFocused = false;
    }, 150);
  }
  
  onFocus() {
    this.inputFocused = true;
  }
  


}
