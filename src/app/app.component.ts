import { Component } from '@angular/core';

interface SideNavToggle{
  screenWith:number;
  collapsed:boolean;
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduGate';
  isSideNavCollapsed=false;
  screenWith=0

  onToggleSideNav(data:SideNavToggle):void {
    this.screenWith=data.screenWith;
    this.isSideNavCollapsed=data.collapsed;
  }
}
