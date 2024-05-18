// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/v1/admin';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }
}
