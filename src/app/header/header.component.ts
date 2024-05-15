import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {



  @Input() collapsed = false;
  @Input() screenWidth = 0;
  canShowSearchAsOverlay =false;
  
constructor(@Inject(PLATFORM_ID) private platformId: Object){ }


@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.checkCanShowSearchAsOverlay(window.innerWidth);

}

ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) { 
    this.checkCanShowSearchAsOverlay(window.innerWidth); }
}
getHeadClass(): string {
  let styleClass = '';
  if(this.collapsed && this.screenWidth > 768){

    styleClass = 'head-trimmed';

}else{

    styleClass = 'head-md-screen';
}
return styleClass;
}

checkCanShowSearchAsOverlay(innerWidth:number):void {
  if(innerWidth<845){
    this.canShowSearchAsOverlay=true;

  }else{
    this.canShowSearchAsOverlay=false;
  }
}

}