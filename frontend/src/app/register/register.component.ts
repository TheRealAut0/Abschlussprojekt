/**
 * Register Component - Benutzer-Registrierung
 * 
 * Diese Komponente erlaubt es neuen Benutzern, sich zu registrieren.
 * Funktionalitäten:
 * - Eingabe von Vorname, Nachname, E-Mail und Passwort
 * - Passwort-Validierung (Bestätigung muss übereinstimmen)
 * - Nutzungsbedingungen-Akzeptanzpflicht
 * - Passwort-Anzeigen/Verstecken Toggle
 * - Fehlerbehandlung mit Benutzer-Feedback
 * - Automatische Weiterleitung zum Login nach erfolgreichem Registrierung
 * 
 * Hinweis:
 * - Die Benutzerrolle wird vom Backend automatisch auf "User" (ID 1) gesetzt
 * - Keine Rollenauswahl während der Registrierung
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /** Vorname des Benutzers */
  firstName = '';
  
  /** Nachname des Benutzers */
  lastName = '';
  
  /** E-Mail-Adresse des Benutzers (muss eindeutig sein) */
  email = '';
  
  /** Passwort des Benutzers */
  password = '';
  
  /** Passwort-Bestätigung (muss mit password übereinstimmen) */
  confirmPassword = '';
  
  /** Checkbox für Akzeptanz der Nutzungsbedingungen */
  acceptTerms = false;
  
  /** Loading-Status während der Registrierung */
  loading = false;
  
  /** Toggle für Passwort-Sichtbarkeit */
  showPassword = false;
  
  // Hinweis: Rollenauswahl ist deaktiviert; Backend weist Rolle 1 (User) automatisch zu

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private router: Router
  ) {}

  /**
   * Führt den Registrierungs-Prozess durch
   * 
   * Validierungen:
   * 1. Form muss vollständig und korrekt ausgefüllt sein
   * 2. Passwort muss mit Bestätigung übereinstimmen
   * 3. Nutzungsbedingungen müssen akzeptiert sein
   * 
   * Ablauf:
   * 1. Validiere alle Eingaben
   * 2. Setze loading = true (deaktiviert Button)
   * 3. Sende POST Request an /users mit Benutzerdaten
   * 4. Bei Erfolg:
   *    - Zeige Success-Alert
   *    - Navigiere zur Login-Seite nach 900ms
   * 5. Bei Fehler:
   *    - Zeige Fehler-Meldung
   * 
   * @param form - Angular FormGroup mit Validierungsinformationen
   */
  register(form: any) {
    // Prüfe, ob das Formular vollständig ausgefüllt ist
    if (form.invalid) {
      this.alert.showAlert('warning', 'Bitte alle erforderlichen Felder korrekt ausfüllen.');
      return;
    }

    // Prüfe, ob Passwörter übereinstimmen
    if (this.password !== this.confirmPassword) {
      this.alert.showAlert('error', 'Die Passwörter stimmen nicht überein.');
      return;
    }

    // Prüfe, ob Nutzungsbedingungen akzeptiert wurden
    if (!this.acceptTerms) {
      this.alert.showAlert('warning', 'Bitte die Nutzungsbedingungen akzeptieren.');
      return;
    }

    // Setze Loading-Status
    this.loading = true;

    // Baue Payload für API Request
    const payload = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password
      // Hinweis: role_id wird vom Backend automatisch auf 1 gesetzt
    };

    // Sende Registrierungs-Request
    this.api.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        
        // Zeige Success-Alert
        this.alert.showAlert('success', 'Registrierung erfolgreich. Du wirst weitergeleitet.');
        
        // Navigiere nach kurzer Verzögerung zur Login-Seite
        setTimeout(() => this.router.navigate(['/login']), 900);
      },
      error: (err: any) => {
        this.loading = false;
        
        // Zeige Fehler-Meldung
        const msg = err?.message || 'Registrierung fehlgeschlagen. Bitte versuche es später.';
        this.alert.showAlert('error', msg);
      }
    });
  }

}
