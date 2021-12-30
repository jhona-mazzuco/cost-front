import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { AUTH_TOKEN_KEY } from "../constants/auth-token-key.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem(AUTH_TOKEN_KEY);
  }

  saveToken(token: string): void {
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  removeToken(): void {
    window.localStorage.setItem(AUTH_TOKEN_KEY, '');
  }

  getToken(): string {
    return window.localStorage.getItem(AUTH_TOKEN_KEY) as string;
  }

  signIn(email: string, password: string): Observable<string> {
    return this.http.post<string>(`${environment.API_URL}/auth/signin`, { email, password });
  }

  signUp(name: string, email: string, password: string): Observable<string> {
    return this.http.post<string>(`${environment.API_URL}/auth/signup`, { name, email, password });
  }

  validateToken(): Observable<boolean> {
    return this.http.get<boolean>(`${environment.API_URL}/auth/validate`);
  }
}
