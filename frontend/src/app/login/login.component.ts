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
  email = '';
  password = '';
  loading = false;
  error = '';
  showPassword = false;
  rememberMe = false;

  constructor(
    private readonly api: ApiService,
    private readonly alert: AlertService,
    private readonly router: Router,
    private readonly tokenService: TokenService
  ) {}

  login(): void {
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'E‑Mail und Passwort sind erforderlich.';
      return;
    }

    this.loading = true;
    this.api.post<any>('auth/login', { email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res?.token) {
          this.tokenService.setToken(res.token, this.rememberMe);
        }
        this.alert.showAlert('success', 'Anmeldung erfolgreich. Du wirst weitergeleitet...');
        setTimeout(() => this.router.navigate(['/home']), 900);
      },
      error: (err) => {
        this.loading = false;
        // show server-provided message if present, otherwise generic
        this.error = err?.error?.error || err?.error?.message || 'E-Mail oder Passwort falsch.';
        console.error('Login error', err);
      }
    });
  }

  goRegister(): void {
    this.router.navigate(['/register']).catch(() => {});
  }
}
