/**
 * Login Component - Benutzer-Authentifizierung
 * 
 * Diese Komponente erlaubt es Benutzern, sich mit E-Mail und Passwort anzumelden.
 * Funktionalitäten:
 * - E-Mail und Passwort Eingabe
 * - Passwort-Anzeigen/Verstecken Toggle
 * - "Angemeldet bleiben" Checkbox
 * - Token-basierte Authentifizierung
 * - Fehlerbehandlung mit Benutzer-Feedback
 * - Weiterleitung zur Home-Seite nach erfolgreichem Login
 * - Link zur Registrierungs-Seite
 */

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /** E-Mail-Adresse des Benutzers */
  email = '';
  
  /** Passwort des Benutzers */
  password = '';
  
  /** Loading-Status während der Authentifizierung */
  loading = false;
  
  /** Fehler-Meldung bei fehlgeschlagener Anmeldung */
  error = '';
  
  /** Toggle für Passwort-Sichtbarkeit */
  showPassword = false;
  
  /** Checkbox "Angemeldet bleiben" - speichert Token persistent */
  rememberMe = false;

  constructor(
    private readonly api: ApiService,
    private readonly alert: AlertService,
    private readonly router: Router,
    private readonly tokenService: TokenService
  ) {}

  /**
   * Führt den Login-Prozess durch
   * 
   * Schritte:
   * 1. Validiere, dass E-Mail und Passwort eingegeben wurden
   * 2. Setze loading = true (deaktiviert Button)
   * 3. Sende POST Request an /auth/login
   * 4. Bei Erfolg:
   *    - Speichere Token (mit RememberMe-Option)
   *    - Zeige Success-Alert
   *    - Navigiere zur Home-Seite nach 900ms
   * 5. Bei Fehler:
   *    - Zeige Fehler-Meldung
   *    - Logge Fehler in Console
   */
  login(): void {
    // Lösche vorherige Fehler-Meldungen
    this.error = '';
    
    // Validierung: E-Mail und Passwort erforderlich
    if (!this.email || !this.password) {
      this.error = 'E‑Mail und Passwort sind erforderlich.';
      return;
    }

    // Setze Loading-Status, um Button zu deaktivieren
    this.loading = true;
    
    // Sende Login-Request an Backend
    this.api.post<any>('auth/login', { email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.loading = false;
        
        // Speichere das JWT Token
        if (res?.token) {
          this.tokenService.setToken(res.token, this.rememberMe);
        }
        
        // Zeige Success-Alert
        this.alert.showAlert('success', 'Anmeldung erfolgreich. Du wirst weitergeleitet...');
        
        // Navigiere nach kurzer Verzögerung zur Home-Seite
        setTimeout(() => this.router.navigate(['/home']), 900);
      },
      error: (err) => {
        this.loading = false;
        
        // Zeige Server-Fehler oder generische Meldung
        this.error = err?.error?.error || err?.error?.message || 'E-Mail oder Passwort falsch.';
        console.error('Login error', err);
      }
    });
  }

  /**
   * Navigiert zur Registrierungs-Seite
   * Wird aufgerufen, wenn User auf "Jetzt registrieren" klickt
   */
  goRegister(): void {
    this.router.navigate(['/register']).catch(() => {});
  }
}
