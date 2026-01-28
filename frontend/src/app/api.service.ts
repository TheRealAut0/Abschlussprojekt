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
  delete<T>(endpoint: string, data: any = null, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const options: any = { headers };
    if (data !== null) options.body = data;
    // Minimaler Fix: request ohne Generics und als Observable<T> casten, dann pipe nutzen
    return (this.http.request('DELETE', url, { ...options, observe: 'body' as 'body' }) as unknown as Observable<T>).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // ---------------------------
  // Konkrete User-Wrapper-Methoden
  // ---------------------------
  getUsers(): Observable<any[]> {
    return this.get<any[]>('users');
  }

  getUserById(id: string): Observable<any> {
    return this.get<any>(`users/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.post<any>('users', data);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.put<any>(`users/${id}`, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.delete<any>(`users/${id}`);
  }

  // 🔹 Fehlerhandling für alle API-Methoden
  private handleError(error: HttpErrorResponse) {
    console.error('API-Fehler:', error);
    const message = error.error?.message || error.message || 'Fehler beim Laden der Daten.';
    return throwError(() => new Error(message));
  }

}
