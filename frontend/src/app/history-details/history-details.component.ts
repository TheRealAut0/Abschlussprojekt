import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit  {


  history: any = {}; // Kein Array, sondern Objekt
  history_id: number = 0;
  loading: boolean = true;

   constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
 
   ngOnInit() {
     this.route.queryParams.subscribe(params => { 
       if (params['id']) {
        this.history_id = params['id'];
        this.getHistoryById(this.history_id); 
       }
     });

   }


   getHistoryById(id: number) {
    this.apiService.get<any>(`histories/list/${id}`).subscribe({
      next: (data) => {
        this.history = data; // Direkt als Objekt speichern
        this.loading = false;
        console.log(this.history); // Sollte das vollständige Objekt anzeigen
        console.log(typeof this.history);  // Sollte 'object' sein
      }, 
      error: (err) => console.error('Fehler beim Laden der Hardware:', err)
    });
  }

  sanitizeDescription(description: string | undefined | null): SafeHtml {
    if (!description) return ''; // Falls undefined oder null, gib leeren String zurück
    return this.sanitizer.bypassSecurityTrustHtml(description.replace(/\n/g, '<br><br>'));
  }


}
