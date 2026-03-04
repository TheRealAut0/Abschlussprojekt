# Projekt

hallo world

## Backend JWT Setup

Die Authentifizierung wurde auf JSON Web Tokens umgestellt. Beim Login wird ein Token
(30 Minuten gültig) erzeugt und im Frontend gespeichert. Alle API-Routen außer `/auth`
benötigen einen `Authorization: Bearer <token>`-Header.

- `jsonwebtoken` ist als Dependency hinzugefügt (`npm install` im `backend`-Ordner)
- Geheimnis in `.env` als `JWT_SECRET` definieren
- Middleware `middleware/authMiddleware.js` prüft und entpackt das Token

## Frontend Ergänzungen

Das Frontend verwendet `@auth0/angular-jwt` zum Auslesen und Prüfen der Ablaufzeit.
Ein `TokenService` kapselt Ablage/Entfernung des Tokens, der `AuthGuard` und ein
Interceptor sorgen für geschützte Routen und das Setzen des Headers.

Vergiss nicht, beide Ordner (`backend` und `frontend`) nach der Änderung `npm install`
anzustoßen und deine Secrets sicher zu setzen.