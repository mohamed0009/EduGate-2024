import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Add your CSS file if any
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to the dashboard on successful login
      },
      error => {
        console.error('Login failed', error); // Handle error scenarios
      }
    );
  }
}
