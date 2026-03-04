import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (token) {
      // falls bereits abgelaufen, sofort ausloggen
      if (this.tokenService.isExpired()) {
        this.tokenService.clear();
        // redirect kann hier nicht direkt erfolgen (kein Router injiziert),
        // der Guard korrigiert bei nächster Navigation.
        // Wir verhindern aber das Abschicken des request.
        return new Observable<HttpEvent<any>>(observer => {
          observer.error(new Error('Token expired'));
        });
      }

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
