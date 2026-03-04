import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'token';
  private helper = new JwtHelperService();

  setToken(token: string, remember: boolean): void {
    if (remember) {
      localStorage.setItem(this.TOKEN_KEY, token);
    } else {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY) || sessionStorage.getItem(this.TOKEN_KEY);
  }

  clear(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  isExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    return this.helper.isTokenExpired(token);
  }

  /**
   * read role from decoded token payload (null if missing)
   */
  getRole(): number | null {
    const token = this.getToken();
    if (!token) return null;
    const decoded: any = this.helper.decodeToken(token) || {};
    return decoded.role_id != null ? Number(decoded.role_id) : null;
  }
}