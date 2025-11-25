import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit  {
  constructor(private apiService: ApiService, private router: Router) {}
  histories: any = [];
  filteredHistories: any = [];
  searchOptions = [
    { label: 'Bearbeiter', value: 'user_fullname' },
    { label: 'Herst.-S/N', value: 'HerstSN' },
    { label: 'Datum', value: 'date' },
    { label: 'Uhrzeit', value: 'time' },
    { label: 'Aktion', value: 'aktion' },
    { label: 'Änderungen', value: 'description' },
  ];

  loading: boolean = true;


  ngOnInit() {
    this.getHistories()

  }
  


  getHistories(){
    this.apiService.get<any[]>('histories/list/').subscribe({
      next: (data) => {
        this.histories = data;
        this.filteredHistories = data;
        this.loading = false;
        console.log(this.histories);
      },
      error: (err) => console.error('Fehler beim Laden der histories:', err)
    });
  }


  showHistoryDetails(id: number): void {
    this.router.navigate(['history/details'], { queryParams: { id: id } });
  }


  onSearchChanged(filter: { key: string, value: string }) {
    console.log('Empfangen von Kind:', filter);
  
    // Beispiel: Filter aufrufen
  
    this.filteredHistories = this.filterArrayBy(this.histories, filter.key, filter.value);

   
  }
  
  filterArrayBy<T>(array: T[], key: keyof T, value: any): T[] {
    return array.filter(item => String(item[key]).toLowerCase().includes(String(value).toLowerCase()));
  }

}
