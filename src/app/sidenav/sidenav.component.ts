import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
 interface SideNavToggle{
  screenWith:number;
  collapsed:boolean;
 }
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = false
  screenWith = 0
  navData= navbarData


  toggleCollapse():void{
    this.collapsed =!this.collapsed;
    this.onToggleSideNav.emit({collapsed :this.collapsed,screenWith :this.screenWith});
  }
  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed :this.collapsed,screenWith :this.screenWith});

  }
}
