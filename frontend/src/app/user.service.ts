import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly USER_KEY = 'user';

  setUser(user: any, remember: boolean) {
    const data = JSON.stringify(user || null);
    // always clear both storages first to avoid stale copy
    localStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    if (remember) {
      localStorage.setItem(this.USER_KEY, data);
    } else {
      sessionStorage.setItem(this.USER_KEY, data);
    }
  }

  getUser(): any {
    const raw = localStorage.getItem(this.USER_KEY) || sessionStorage.getItem(this.USER_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  clear() {
    localStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }
}
