import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5000'; // Basis-URL für API-Anfragen

  constructor(private http: HttpClient) {}

  // 🔹 Generische Methode für GET-Anfragen
  get<T>(endpoint: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params }).pipe(
      map(response => response), // Verarbeitung der Antwort
      catchError(this.handleError) // Fehlerhandling
    );
  }

  // 🔹 Generische Methode für POST-Anfragen
  post<T>(endpoint: string, data: any, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, { headers }).pipe(
      map(response => response), // Verarbeitung der Antwort
      catchError(this.handleError) // Fehlerhandling
    );
  }

  // 🔹 Generische Methode für PUT-Anfragen (Update)
  put<T>(endpoint: string, data: any, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data, { headers }).pipe(
      map(response => response), // Verarbeitung der Antwort
      catchError(this.handleError) // Fehlerhandling
    );
  }

  // 🔹 Generische Methode für DELETE-Anfragen (Löschen)
  delete<T>(endpoint: string, data: any, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers,
      body: data
    }).pipe(
      map(response => response), // Verarbeitung der Antwort
      catchError(this.handleError)  // Fehlerhandling
    );
  }

  // 🔹 Fehlerhandling für alle API-Methoden
  private handleError(error: HttpErrorResponse) {
    console.error('API-Fehler:', error);
    return throwError(() => new Error('Fehler beim Laden der Daten.'));
  }

}
