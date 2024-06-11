import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/authenticate'; // Adjust your backend URL
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.loginUrl, { username, password }).pipe(
      tap(res => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('token', res.token);
          this.isLoggedInSubject.next(true); 
        }
      })
    );
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      this.isLoggedInSubject.next(false);
    }
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  checkLoggedInStatus() {
    const tokenExists = this.hasToken();
    this.isLoggedInSubject.next(tokenExists); 
  }
}
