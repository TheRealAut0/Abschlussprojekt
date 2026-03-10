/**
 * Admin Component - Benutzerverwaltung
 * 
 * Diese Komponente verwaltet alle Benutzer der Anwendung.
 * Administratoren können hier:
 * - Eine Liste aller Benutzer ansehen
 * - Benutzerrollen (Admin, Editor, Viewer) zuweisen/ändern
 * - Benutzer bearbeiten und löschen
 * - Rollenänderungen werden direkt in der Datenbank gespeichert
 */

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

/**
 * User Interface - Definiert die Struktur eines Benutzers
 * 
 * @property _id - MongoDB Benutzer-ID (optional)
 * @property id - SQL Benutzer-ID (optional)
 * @property name - Vollständiger Name des Benutzers (optional)
 * @property first_name - Vorname des Benutzers
 * @property last_name - Nachname des Benutzers
 * @property email - E-Mail-Adresse des Benutzers
 * @property role - Aktuelle Rolle des Benutzers (Admin, Editor, Viewer)
 * @property isAdmin - Boolean, ob Benutzer Admin-Rolle hat
 * @property isEditor - Boolean, ob Benutzer Editor-Rolle hat
 * @property isViewer - Boolean, ob Benutzer Viewer-Rolle hat
 */
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
  /** Array mit allen Benutzern */
  users: User[] = [];
  
  /** Map zur Verfolgung modifizierter Benutzer (für Batch-Updates) */
  private modified = new Map<string, User>();

  /** Loading-Status für die Anzeige des Lade-Spinners */
  loading: boolean = true;

  constructor(private api: ApiService, private router: Router) {}

  /**
   * Angular Lifecycle Hook - wird aufgerufen, wenn die Komponente initialisiert wird
   * Lädt alle Benutzer und Rollen von der API
   */
  ngOnInit(): void {
    this.loadUsers();
  }

  /**
   * Lädt alle Benutzer und ihre Rollen von der API
   * 
   * Schritte:
   * 1. Fetch alle Rollen von der API
   * 2. Erstelle ein Map von role_id zu role.name für schnelle Zuordnung
   * 3. Rufe loadUsersWithRoleMap auf, um Benutzer zu laden und Rollen zuzuordnen
   * 4. Bei Fehler: Fallback ohne Rollen-Mapping
   */
  loadUsers(): void {
    // Laden Sie zuerst die Rollen
    this.api.getRoles().subscribe({
      next: (roles: any[]) => {
        // Erstelle ein Map von role_id zu role.name
        const roleMap = new Map<number, string>();
        roles.forEach(role => {
          roleMap.set(role.id, role.name);
        });

        // Laden Sie dann die Benutzer
        this.loadUsersWithRoleMap(roleMap);
      },
      error: (err: any) => {
        console.error('Load roles error', err);
        // Fallback: Laden Sie Benutzer ohne Rollen-Mapping
        console.warn('Rollen-Tabelle nicht vorhanden, lade Benutzer ohne Rollen-Mapping');
        this.loadUsersWithRoleMap(new Map());
      }
    });
  }

  /**
   * Private Methode zum Laden aller Benutzer mit Rollen-Mapping
   * 
   * @param roleMap - Map von role_id zu Rollennamen
   * 
   * Für jeden Benutzer:
   * - Bestimme die Rolle basierend auf role_id oder role Property
   * - Setze isAdmin, isEditor, isViewer Boolean-Flags
   * - Diese Flags werden für Radio Buttons verwendet
   */
  private loadUsersWithRoleMap(roleMap: Map<number, string>): void {
    this.api.getUsers().subscribe({
      next: (res: any[]) => {
        this.users = res.map((u: any) => {
          // Bestimme die Rolle basierend auf role_id
          const roleId = u.role_id || u.role;
          let role: string | undefined;
          
          if (typeof roleId === 'number' && roleMap.size > 0) {
            role = roleMap.get(roleId);
          } else if (typeof roleId === 'string') {
            role = roleId;
          }
          
          return {
            ...u,
            role,
            isAdmin: role === 'Admin',
            isEditor: role === 'Editor',
            isViewer: role === 'Viewer'
          };
        });
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Load users error', err);
        alert('Fehler beim Laden der Benutzer.');
      }
    });
  }

  /**
   * Ändert die Rolle eines Benutzers lokal und markiert ihn als geändert
   * 
   * @param user - Der Benutzer, dessen Rolle geändert wird
   * @param role - Die neue Rolle (Admin, Editor, Viewer, oder undefined)
   * 
   * Setzt:
   * - user.role zu der neuen Rolle
   * - isAdmin, isEditor, isViewer entsprechend
   * - Markiert den Benutzer als geändert (für spätere Batch-Updates)
   */
  changeRole(user: User, role: 'Admin' | 'Editor' | 'Viewer' | undefined): void {
    user.role = role;
    user.isAdmin = role === 'Admin';
    user.isEditor = role === 'Editor';
    user.isViewer = role === 'Viewer';
    this.markModified(user);
  }

  /**
   * Event Handler für Radio Button Änderungen
   * 
   * @param user - Der betroffene Benutzer
   * @param role - Die ausgewählte Rolle
   * @param event - Das Change-Event des Radio Buttons
   * 
   * Logik:
   * 1. Prüfe, ob der Radio Button checked ist
   * 2. Ändere Rolle entsprechend
   * 3. Speichere die Änderung sofort in der Datenbank (nicht nur lokal!)
   */
  toggleRight(user: User, role: 'Admin' | 'Editor' | 'Viewer', event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const newRole = checked ? role : undefined;
    
    this.changeRole(user, newRole);
    
    // Speichere die Änderung sofort in der Datenbank
    this.saveUserRole(user, newRole);
  }

  /**
   * Speichert die Rollenänderung sofort in der Datenbank
   * 
   * @param user - Der Benutzer
   * @param role - Die neue Rolle
   * 
   * Ablauf:
   * 1. Extrahiere Benutzer-ID
   * 2. Baue Request Body mit allen Benutzer-Daten auf
   * 3. Sende PUT Request an /users/:id
   * 4. Bei Erfolg: Zeige Success-Meldung in Console
   * 5. Bei Fehler: Alert und Reload (Konsistenz)
   */
  private saveUserRole(user: User, role: 'Admin' | 'Editor' | 'Viewer' | undefined): void {
    const id = this.idOf(user);
    if (!id) {
      alert('Benutzer-ID fehlt.');
      return;
    }

    const body: any = {
      ...(user.first_name !== undefined ? { first_name: user.first_name } : {}),
      ...(user.last_name !== undefined ? { last_name: user.last_name } : {}),
      ...(user.email !== undefined ? { email: user.email } : {}),
      ...(role !== undefined ? { role } : { role: null })
    };

    this.api.updateUser(id, body).subscribe({
      next: () => {
        console.log(`✅ Rolle für ${user.email} aktualisiert zu: ${role || 'Keine'}`);
      },
      error: (err: any) => {
        console.error('Fehler beim Aktualisieren der Rolle:', err);
        alert('Fehler beim Speichern der Rolle.');
        // Lade Benutzer neu, um die Änderung rückgängig zu machen
        this.loadUsers();
      }
    });
  }

  /**
   * Extrahiert die eindeutige ID eines Benutzers
   * Versucht nacheinander: _id (MongoDB), id (SQL), oder email als Fallback
   * 
   * @param user - Der Benutzer
   * @returns Die eindeutige ID des Benutzers
   */
  private idOf(user: User): string {
    return user._id ?? user.id ?? user.email ?? '';
  }

  /**
   * Markiert einen Benutzer als geändert (für Batch-Updates)
   * Speichert eine Kopie in der this.modified Map
   * 
   * @param user - Der geänderte Benutzer
   */
  private markModified(user: User): void {
    const id = this.idOf(user);
    if (!id) return;
    this.modified.set(id, { ...user });
  }

  /**
   * Speichert alle markierten Änderungen in einem Batch
   * 
   * Ablauf:
   * 1. Prüfe, ob es geänderte Benutzer gibt
   * 2. Für jeden geänderten Benutzer: Erstelle einen UPDATE-Request
   * 3. Nutze forkJoin, um alle Requests parallel zu senden
   * 4. Bei Erfolg: Leere die Modified-Map und lade Benutzer neu
   * 5. Bei Fehler: Zeige Alert
   * 
   * Hinweis: Diese Methode ist veraltet, seit wir sofort speichern
   */
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

  /**
   * Löscht einen Benutzer aus der Datenbank
   * 
   * @param user - Der zu löschende Benutzer
   * 
   * Ablauf:
   * 1. Extrahiere Benutzer-ID
   * 2. Frage Bestätigung vom Admin
   * 3. Sende DELETE Request
   * 4. Bei Erfolg: Entferne Benutzer aus der Liste
   * 5. Bei Fehler: Zeige Alert
   */
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

  /**
   * Navigiert zur Edit-Seite eines Benutzers
   * 
   * @param user - Der zu bearbeitende Benutzer
   * 
   * Route: /users/:id/edit
   * Bei Fehler: Zeige Alert (Route könnte nicht existieren)
   */
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
