import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthenticatedInterceptor implements HttpInterceptor {
  constructor(private service: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.service.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          authentication: `Bearer ${ this.service.getToken() }`
        }
      });
    }

    return next.handle(request);
  }
}
