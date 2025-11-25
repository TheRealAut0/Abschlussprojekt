import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hardwarelists: any[] = [];
  filteredlist: any = [];
  loading: boolean = true;
  key: string = "";
  value: string = "";
  searchOptions = [
    { label: 'Herst.-S/N', value: 'HerstSN' },
    { label: 'Name', value: 'hardware_name' },
    { label: 'Standort', value: 'location_name' },
    { label: 'Schrank', value: 'locker_label' },
    { label: 'Ausgeliehen am', value: 'lends_out_at' },
    { label: 'Ausgeliehen von', value: 'employee_fullname' },
    { label: 'Betriebssystem', value: 'operating_system_name' },
    { label: 'Status', value: 'status' }
  ];

  constructor(private apiService: ApiService, private alertService: AlertService) {}
 
  ngOnInit() {
    // 🔹 Benutzer-Daten abrufen
    this.getHardwarelist();

  }
  
  getHardwarelist(){
    this.loading = true;
    this.apiService.get<any[]>('hardware_inventory/list').subscribe({
      next: (data) => {
        this.hardwarelists = data;
        this.filteredlist = data
        console.log(this.hardwarelists);
        this.loading = false;
      },
      error: (err) => console.error('Fehler beim Laden der Liste:', err)
    });
  }


  getHardwareListWithNotification(type: 'success' | 'error', message: string) {
    this.loading = true;
    this.apiService.get<any[]>('hardware_inventory/list').subscribe({
      next: (data) => {
        this.hardwarelists = data;
        this.filteredlist = data
        this.filteredlist = this.filterArrayBy(this.hardwarelists, this.key, this.value);
        console.log(this.hardwarelists);
        this.loading = false;
  
        if (type === 'success') {
          this.showSuccess(message);
        } else {
          this.showError(message);
        }
      },
      error: (err) => {
        console.error('Fehler beim Laden der Benutzer:', err);
        this.loading = false;
      }
    });
  }

  showSuccess(msg: string) {
    this.alertService.showAlert('success', msg);
  }

  showError(msg: string) {
    this.alertService.showAlert('error', msg);
  }
  showInfo(msg: string) {
    this.alertService.showAlert('info', msg);
  }

  onSearchChanged(filter: { key: string, value: string }) {
    console.log('Empfangen von Kind:', filter);
     this.key = filter.key;
     this.value = filter.value;

    const result = this.filterArrayBy(this.filteredlist, filter.key, filter.value);
    this.filteredlist = this.filterArrayBy(this.hardwarelists, filter.key, filter.value);
    console.log('Gefilterte Liste:', this.filteredlist);
  }
  
  filterArrayBy<T>(array: T[], key: keyof T, value: any): T[] {
    return array.filter(item => String(item[key]).toLowerCase().includes(String(value).toLowerCase()));
  }
}
