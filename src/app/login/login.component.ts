import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    // Call the AuthService to authenticate the user
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Authentication successful
        console.log('Authentication successful');
        // Route to the dashboard component
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Authentication failed
        console.error('Authentication failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
