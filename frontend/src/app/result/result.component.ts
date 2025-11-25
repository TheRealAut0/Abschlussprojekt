import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  loading: boolean = true;
  analyzeId: number = 1;
  analyzeResult: any[] = [];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => { 
      if (params['id']) {
        this.analyzeId = params['id'];
        this.getAnalyzeResult(this.analyzeId);
      }
    });
  }

  getAnalyzeResult(id: number) {
    this.loading = true;  // Loading startet erst hier
    this.apiService.get<any[]>(`analyze/result/${this.analyzeId}`).subscribe({
      next: (data) => {
        this.analyzeResult = data;
        console.log(this.analyzeResult);
        this.loading = false; // Loading erst nach erfolgreichem Laden ausschalten
      },
      error: (err) => {
        console.error('Fehler beim Laden der Benutzer:', err);
        this.loading = false; // Auch im Fehlerfall Loading deaktivieren
      }
    });
  }

  get tableHeaders(): string[] {
    return this.analyzeResult.length > 0 ? Object.keys(this.analyzeResult[0]) : [];
  }
}
