import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}

  canActivate(): boolean {
    // ensure authenticated
    const token = this.tokenService.getToken();
    if (!token || this.tokenService.isExpired()) {
      this.tokenService.clear();
      this.router.navigate(['/login']);
      return false;
    }

    // prefer role from token, fall back to stored user
    const role = this.tokenService.getRole() ?? Number(this.userService.getUser()?.role_id);
    if (role === 3) {
      return true;
    }

    // not admin → redirect to home
    this.router.navigate(['/home']);
    return false;
  }
}
