import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../alert.service';

interface Employee {
  id: Number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
}

interface ApiResponse {
  hardware: {message:string};
  // Weitere Felder falls vorhanden
}

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {
  hardware: any = {}; // Kein Array, sondern Objekt
  hardware_id: number = 0;
  hardwareAccessories: any[] = [];
  employees: Employee[] = [];
  manufacturers:any = [];
  hardwareData: any = [];
  selected_hardware: any = {};
  filteredHardwarelist: any = [];
  locations:any = [];
  lockers: any = [];
  filteredLockerslist: any = [];
  selected_lockers: any = {};
  isonloan:boolean = false;
  inputName: string = '';
  vorschlaege: Employee[] = [];
  inputFocused = false;
  selectedEmployeeId: number | null = null;
  loading: boolean = true;
  selectedStatus = 0;
  HardwareStatuses: any = [];
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private alertService: AlertService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => { 
      if (params['id']) { // Verhindert fehlerhafte API-Requests
        this.hardware_id = params['id'];
        this.getHardwareById(this.hardware_id);
        this.getHardwareAccessoriesById(this.hardware_id);
        this.getEmployees();
        this.getManufacturers();
        this.getHardwareData();
        this.getLocations();
        this.getLockers();
        this.getHardwareStatuses();
        
      }
    });
  }

  getHardwareAccessoriesById(id: number) {
    this.apiService.get<any>(`accessories/hardware/${id}`).subscribe({
      next: (data) => {
        this.hardwareAccessories = data;
       
      },
      error: (err) => {
        console.log(err)
        if (err.status === 404) {
          this.hardwareAccessories = [];
          console.warn('Keine Hardware-Zubehörteile gefunden (404).');
        } else {
          console.error('Fehler beim Laden der Hardware:', err);
        }
      }
    });
  }

  getHardwareById(id: number) {
    this.apiService.get<any>(`hardware_inventory/list/${id}`).subscribe({
      next: (data) => {
        this.hardware = data; // Direkt als Objekt speichern
      
        this.selectedEmployeeId = this.hardware.employee_id;
        if(this.hardware.status_id === 2){this.isonloan = true; this.inputName = this.hardware.employee_first_name +  " " + this.hardware.employee_last_name}
        console.log(this.hardware); // Sollte das vollständige Objekt anzeigen
        console.log(typeof this.hardware);  // Sollte 'object' sein
      }, 
      error: (err) => console.error('Fehler beim Laden der Hardware:', err)
    });
  }


  addAccessoryInput() {
    const inputElement = document.getElementById("accessory") as HTMLInputElement;
    const newAccessory = inputElement.value.trim(); // Hole den Wert des Inputs und trimme Leerzeichen
    if (newAccessory) {
      this.apiService.post(`accessories/`, {hardware_id: this.hardware_id, name: newAccessory, user_id: 5}).subscribe({
        next: (response) => {
          console.log("Erfolgreich gesendet!", response);
          this.showSuccess("accessory erfolgreich hinzugefügt!");
          this.getHardwareAccessoriesById(this.hardware_id);
        },
        error: (error) => {
          console.error("Fehler beim Senden:", error);
          this.showError("Fehler beim Hinzufügen des accessory!");
        }
      });
      
      inputElement.value = ""; // Setze das Eingabefeld zurück
    } else {
      alert("Bitte einen Zubehör-Namen eingeben!");
    }
  }

  removeAccessory(id: number) {
    console.log(id)
    this.apiService.delete(`accessories/${id}`,{user_id: 5}).subscribe({
      next: (response) => {
        console.log("Erfolgreich gesendet!", response);
        this.showSuccess("accessory erfolgreich entfernt!");
        if(this.hardwareAccessories.length = 1){this.hardwareAccessories = []}
        this.getHardwareAccessoriesById(this.hardware_id);
        
      },
      error: (error) => {
        console.error("Fehler beim Senden:", error);
        this.showError("Fehler beim entfernt des accessory!");
      }
    });
  }


  convertToDateInputFormat(apiDate: string): string {
    if (!apiDate) return ''; // Falls das Datum leer ist
  
    const dateParts = apiDate.split('.'); // Teilt "16.01.2023" in ["16", "01", "2023"]
    
    if (dateParts.length !== 3) return ''; // Falls das Format falsch ist
  
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // Gibt "2023-01-16" zurück
  }


  getEmployees(){
    this.apiService.get<any[]>('employees/').subscribe({
      next: (data) => {
        this.employees = data;
        this.loading = false;
        console.log(this.employees);
      },
      error: (err) => console.error('Fehler beim Laden der Benutzer:', err)
    });
  }


  submitForm() {
    // Alle Inputs und Selects auslesen (außer #accessory)
    const inputs = document.querySelectorAll('#HardwareEditform input, #HardwareEditform select');
    const formData: any = {"user_id": 5};
  
    inputs.forEach((input: any) => {
      if (input.id !== 'accessory' && input.id && input.value !== "null" && input.value != "") {
        formData[input.id] = input.value.trim();
      }
      
    });
  
  
  
    console.log("Gesendete Daten:", formData);
    
    // API POST-Request mit ApiService senden
    this.apiService.put<ApiResponse>(`hardware_inventory/${this.hardware_id}`, formData).subscribe({
      next: (response) => {
        console.log("Erfolgreich gesendet!", response);
        if(response.hardware.message === "Keine Änderungen vorgenommen"){
          this.showInfo(response.hardware.message);
        }else{
          this.showSuccess("Erfolgreich aktualisiert!");
        }
        this.router.navigate(['']);

      },
      error: (error) => {
        console.error("Fehler beim Senden:", error);
        this.showError("Fehler beim aktualisieren des Geräts!");
      }
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


  getHardwareData(){
    this.apiService.get<any[]>('hardware_data/list/').subscribe({
      next: (data) => {
        this.hardwareData = data;
        this.filteredHardwarelist = this.hardwareData.filter((item: { manufacturer_id: number }) => 
          item.manufacturer_id === this.hardware.manufacturer_id
      );
        this.selected_hardware = this.hardwareData.find((item: { id: number }) => item.id === this.hardware.hardware_data_id) || {};
        console.log(this.selected_hardware)
      },
      error: (err) => console.error('Fehler beim Laden der Benutzer:', err)
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
    console.log("test: ", this.filteredHardwarelist)
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
        item.location_id === this.hardware.locker_location_id
    );
      console.log(this.filteredLockerslist)
    },
    error: (err) => console.error('Fehler beim Laden der Schränke:', err)
  });
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
  this.selectedStatus = status_id;
  console.log(this.isonloan)

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

showSuccess(msg: string) {
  this.alertService.showAlert('success', msg);
}
showInfo(msg: string) {
  this.alertService.showAlert('info', msg);
}


showError(msg: string) {
  this.alertService.showAlert('error', msg);
}


deleteHardware(){
  this.apiService.delete(`hardware_inventory/${this.hardware_id}`, {user_id: 6}).subscribe({
    next: (response) => {
      console.log("Erfolgreich gesendet!", response);
      this.showSuccess("Erfolgreich gelöscht!");
      this.router.navigate(['']);

    },
    error: (error) => {
      console.error("Fehler beim Senden:", error);
      this.showError("Fehler beim löschen des Geräts!");
    }
  });
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