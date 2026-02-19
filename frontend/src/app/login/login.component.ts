import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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

  constructor(private api: ApiService, private router: Router) {}

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
          if (this.rememberMe) localStorage.setItem('token', res.token);
          else sessionStorage.setItem('token', res.token);
        }
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.message || 'Login fehlgeschlagen.';
        console.error('Login error', err);
      }
    });
  }

  goRegister(): void {
    this.router.navigate(['/register']).catch(() => {});
  }
}
