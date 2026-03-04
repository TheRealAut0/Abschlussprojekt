import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly tokenService: TokenService,
    private readonly alert: AlertService
  ) {}

  canActivate(): boolean {
    const token = this.tokenService.getToken();
    if (token && !this.tokenService.isExpired()) {
      return true;
    }

    // falls wir hierher kommen: Token fehlt oder ist abgelaufen
    if (token && this.tokenService.isExpired()) {
      this.alert.showAlert('error', 'Sitzung abgelaufen. Bitte melde dich erneut an.');
    }
    this.tokenService.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
