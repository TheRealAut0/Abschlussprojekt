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
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  loading = false;
  showPassword = false;
  // role selection disabled; backend assigns role 1 by default

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private router: Router
  ) {}

  register(form: any) {
    if (form.invalid) {
      this.alert.showAlert('warning', 'Bitte alle erforderlichen Felder korrekt ausfüllen.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.alert.showAlert('error', 'Die Passwörter stimmen nicht überein.');
      return;
    }

    if (!this.acceptTerms) {
      this.alert.showAlert('warning', 'Bitte die Nutzungsbedingungen akzeptieren.');
      return;
    }

    this.loading = true;

    const payload = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password
    };

    this.api.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        this.alert.showAlert('success', 'Registrierung erfolgreich. Du wirst weitergeleitet.');
        setTimeout(() => this.router.navigate(['/login']), 900);
      },
      error: (err: any) => {
        this.loading = false;
        const msg = err?.message || 'Registrierung fehlgeschlagen. Bitte versuche es später.';
        this.alert.showAlert('error', msg);
      }
    });
  }

}
