import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  constructor(private http: HttpClient) { }

  register(name: string): Observable<any> {
    return this.http.post(`${environment.API_URL}/centers`, { name });
  }

  findAll(): Observable<any> {
    return this.http.get(`${environment.API_URL}/centers`);
  }
}
