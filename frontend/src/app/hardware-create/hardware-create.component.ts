import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertService } from '../alert.service';


interface Employee {
  id: Number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
}

@Component({
  selector: 'app-hardware-create',
  templateUrl: './hardware-create.component.html',
  styleUrls: ['./hardware-create.component.css']
})
export class HardwareCreateComponent implements OnInit {
  constructor(private apiService: ApiService, private alertService: AlertService) {}
  hardwareCreateAccessories: any[] = [];
  isExpanded: boolean = false;
  employees: Employee[] = [];
  hardwareData: any = [];
  filteredHardwarelist: any = [];
  selected_hardware: any = {};
  manufacturers:any = [];
  locations:any = [];
  lockers: any = [];
  filteredLockerslist: any = [];
  selected_lockers: any = {};
  isonloan:boolean = false;
  inputName = '';
  vorschlaege: Employee[] = [];
  inputFocused = false;
  selectedEmployeeId: number | null = null;
  @Output() submitted = new EventEmitter<void>(); 
   
  ngOnInit() {
   this.getEmployees();
   this.getHardwareData();
   this.getManufacturers();
   this.getLocations();
   this.getLockers();
  }

  toggleHeight() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }

  addAccessoryInput() {
    const inputElement = document.getElementById("accessory") as HTMLInputElement;
    const newAccessory = inputElement.value.trim(); // Hole den Wert des Inputs und trimme Leerzeichen

    if (newAccessory) {
      this.hardwareCreateAccessories.push(newAccessory); // Füge den neuen Wert ins Array ein
      inputElement.value = ""; // Setze das Eingabefeld zurück
    } else {
      alert("Bitte einen Zubehör-Namen eingeben!");
    }
  }

  removeAccessory(index: number) {
    this.hardwareCreateAccessories.splice(index, 1); // Entfernt das Element mit dem übergebenen Index
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log("Aktuelles Datum:", inputElement.value);
  }

  submitForm() {
    // Alle Inputs und Selects auslesen (außer #accessory)
    const inputs = document.querySelectorAll('#HardwareCreateform input, #HardwareCreateform select');
    const statusInput = document.querySelector('#status_id') as HTMLSelectElement;
    const lends_out_atInput = document.querySelector('#lends_out_at') as HTMLSelectElement;
    const employee_idInput = document.querySelector('#employee_id') as HTMLSelectElement;
    const formData: any = {"user_id": 5};
    const status_id = Number(statusInput.value);
  

    if (status_id == 2 && (!lends_out_atInput.value || !employee_idInput.value)) {
      this.showWarning(`Ausgeliehen Am und Ausgeliehen Von müssen ausgewählt sein!`);
        
      return;
    }
    inputs.forEach((input: any) => {
      if (input.id !== 'accessory' && input.id && input.value !== "null" && input.value != "") {
        formData[input.id] = input.value.trim();
      }
      
    });
  
    // Zubehör-Liste hinzufügen
    formData["accessories"] = this.hardwareCreateAccessories;
  
    console.log("Gesendete Daten:", formData);
  
    // API POST-Request mit ApiService senden
    this.apiService.post('hardware_inventory', formData).subscribe({
      next: (response) => {
        console.log("Erfolgreich gesendet!", response);
        // alert("Gerät erfolgreich hinzugefügt!");
        this.selectedEmployeeId = null;
        this.inputName = "";
        this.vorschlaege = [];
        this.toggleHeight();
        this.submitted.emit();
        this.hardwareCreateAccessories = [];
      },
      error: (error) => {
        console.error("Fehler beim Senden:", error);
        this.showError("Fehler beim Hinzufügen!");
      }
    });
    
  }

  getEmployees(){
    this.apiService.get<any[]>('employees/').subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => console.error('Fehler beim Laden der Benutzer:', err)
    });
  }

  getHardwareData(){
    this.apiService.get<any[]>('hardware_data/list/').subscribe({
      next: (data) => {
        this.hardwareData = data;
        this.filteredHardwarelist = this.hardwareData.filter((item: { manufacturer_id: number }) => 
          item.manufacturer_id === 2
      );
        this.selected_hardware = this.hardwareData.find((item: { id: number }) => item.id === 1) || {};
        console.log(this.selected_hardware)
      },
      error: (err) => console.error('Fehler beim Laden der Benutzer:', err)
    });
  }

  getManufacturers(){
    this.apiService.get<any[]>('manufacturers/').subscribe({
      next: (data) => {
        this.manufacturers = data;
        console.log(this.manufacturers)
      },
      error: (err) => console.error('Fehler beim Laden der Hersteller:', err)
    });
  }

  getLocations(){
    this.apiService.get<any[]>('locations/').subscribe({
      next: (data) => {
        this.locations = data;
        console.log(this.locations)
      },
      error: (err) => console.error('Fehler beim Laden der Standorten:', err)
    });
  }

  getLockers(){
    this.apiService.get<any[]>('lockers/').subscribe({
      next: (data) => {
        this.lockers = data;
        this.filteredLockerslist = this.lockers.filter((item: { location_id: number }) => 
          item.location_id === 1
      );
        console.log(this.lockers)
      },
      error: (err) => console.error('Fehler beim Laden der Schränke:', err)
    });
  }

  onManufacturerChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const manufacturerId = Number(selectElement.value);
    this.filteredHardwarelist = [...this.hardwareData];
   
    // Sicherstellen, dass `filteredHardwarelist` korrekt typisiert ist
    if(manufacturerId != 0){
      this.filteredHardwarelist = this.filteredHardwarelist.filter((item: { manufacturer_id: number }) => 
        item.manufacturer_id === manufacturerId
    );
    this.selected_hardware = this.filteredHardwarelist[0]; 

    }else{
      this.filteredHardwarelist = [...this.hardwareData];
      this.selected_hardware = this.filteredHardwarelist[0]; 
    }
   
}


onHardwareDataChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const hardware_data_id = Number(selectElement.value);
  this.selected_hardware = this.hardwareData.find((item: { id: number }) => item.id === hardware_data_id) || {};

}


onLocationChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const locationId = Number(selectElement.value);
  this.filteredLockerslist = [...this.lockers];
 
  if(locationId != 0){
    this.filteredLockerslist = this.filteredLockerslist.filter((item: { location_id: number }) => 
      item.location_id === locationId
  );
  this.selected_lockers = this.filteredLockerslist[0]; 
  console.log("filteredLockerslist:",this.filteredLockerslist);
  console.log("selected_lockers:",this.selected_lockers);
  }
 
}

onStatusChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const status_id = Number(selectElement.value);
  if(status_id === 2){
    this.isonloan = true;
  }else{
    this.isonloan = false;
  }

}

showSuccess(msg: string) {
  this.alertService.showAlert('success', msg);
}

showError(msg: string) {
  this.alertService.showAlert('error', msg);
}

showWarning(msg: string) {
  this.alertService.showAlert('warning', msg);
}




onEmployeeInputChange() {
  const input = this.inputName.toLowerCase();
  this.vorschlaege = this.employees.filter(emp => {
    const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase();
    return fullName.includes(input);
  });
}

setName(emp: Employee) {
  this.inputName = `${emp.first_name} ${emp.last_name}`;
  this.selectedEmployeeId = Number(emp.id);
  this.vorschlaege = [];
}
onFocus() {
  this.inputFocused = true;
}

onBlur() {
  setTimeout(() => {
    this.inputFocused = false;
  }, 150); // kleine Verzögerung, damit Klick auf Liste noch geht
}


  
}
