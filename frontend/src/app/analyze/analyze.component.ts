import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}
  Analysis: any[] = [];
  analyzeId: number = 1;
  loading: boolean = true;
  showAyalyzeResult(): void {
    this.router.navigate(['analyze/result'], { queryParams: { id: this.analyzeId} });
  }
 
  ngOnInit(): void {
    this.getAnalysis();
  }

  onChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const analyzeId = Number(selectElement.value);

    
    this.analyzeId = analyzeId;

    console.log("analyzeId:", analyzeId);

}

getAnalysis(){
  this.apiService.get<any[]>('analyze').subscribe({
    next: (data) => {
      this.Analysis = data;
      this.loading = false;
      console.log(this.Analysis);
    },
    error: (err) => console.error('Fehler beim Laden der Benutzer:', err)
  });
}

}
