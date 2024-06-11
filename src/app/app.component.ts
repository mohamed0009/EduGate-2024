import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit {
  title = 'EduGate';
  isSideNavCollapsed = false;
  screenWidth = 0;
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkLoggedInStatus(); // Check login status on component initialization
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn; // Update login status when it changes
    });
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
