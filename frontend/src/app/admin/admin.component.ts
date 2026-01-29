import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

interface User {
  _id?: string;
  id?: string;
  name?: string;         
  first_name?: string;   
  last_name?: string;    
  email: string;
  role?: string;
  isAdmin?: boolean;
  isEditor?: boolean;
  isViewer?: boolean;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  private modified = new Map<string, User>();

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.api.getUsers().subscribe({
      next: (res: any[]) => {
        this.users = res.map((u: any) => {
          const role = (u.role ?? (u.isAdmin ? 'Admin' : u.isEditor ? 'Editor' : u.isViewer ? 'Viewer' : undefined)) as string | undefined;
          return {
            ...u,
            role,
            isAdmin: role === 'Admin',
            isEditor: role === 'Editor',
            isViewer: role === 'Viewer'
          };
        });
      },
      error: (err: any) => {
        console.error('Load users error', err);
        alert('Fehler beim Laden der Benutzer.');
      }
    });
  }

  changeRole(user: User, role: 'Admin' | 'Editor' | 'Viewer' | undefined): void {
    user.role = role;
    user.isAdmin = role === 'Admin';
    user.isEditor = role === 'Editor';
    user.isViewer = role === 'Viewer';
    this.markModified(user);
  }

  toggleRight(user: User, role: 'Admin' | 'Editor' | 'Viewer', event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.changeRole(user, checked ? role : undefined);
  }

  private idOf(user: User): string {
    return user._id ?? user.id ?? user.email ?? '';
  }

  private markModified(user: User): void {
    const id = this.idOf(user);
    if (!id) return;
    this.modified.set(id, { ...user });
  }

  saveChanges(): void {
    if (this.modified.size === 0) {
      alert('Keine Änderungen vorhanden.');
      return;
    }

    const updates: Observable<any>[] = [];
    this.modified.forEach((user) => {
      const id = this.idOf(user);
      if (!id) return;

      const body: any = {
        ...(user.name !== undefined ? { name: user.name } : {}),
        ...(user.email !== undefined ? { email: user.email } : {}),
        ...((user as any).first_name !== undefined ? { first_name: (user as any).first_name } : {}),
        ...((user as any).last_name !== undefined ? { last_name: (user as any).last_name } : {}),
        ...(user.role !== undefined ? { role: user.role } : {})
      };

      updates.push(this.api.updateUser(id, body));
    });

    if (updates.length === 0) {
      alert('Keine gültigen Änderungen zum Speichern.');
      return;
    }

    forkJoin(updates).subscribe({
      next: () => {
        alert('Änderungen gespeichert.');
        this.modified.clear();
        this.loadUsers();
      },
      error: (err: any) => {
        console.error('Save changes error', err);
        alert('Fehler beim Speichern der Änderungen.');
      }
    });
  }

  deleteUser(user: User): void {
    const id = this.idOf(user);
    if (!id) {
      alert('Kann Benutzer nicht identifizieren.');
      return;
    }
    if (!confirm(`Benutzer "${user.name}" wirklich löschen?`)) return;

    this.api.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => this.idOf(u) !== id);
        this.modified.delete(id);
      },
      error: (err: any) => {
        console.error('Delete user error', err);
        alert('Fehler beim Löschen des Benutzers.');
      }
    });
  }

  editUser(user: User): void {
    const id = this.idOf(user);
    if (!id) {
      alert('Benutzer-ID fehlt.');
      return;
    }
    this.router.navigate(['/users', id, 'edit']).catch(err => {
      console.warn('Navigation fehlgeschlagen', err);
      alert('Bearbeiten nicht möglich (Route fehlt).');
    });
  }
}
