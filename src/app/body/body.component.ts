import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWith = 0;
getBodyClass(): string {
  let styleClass='';
  if ( this.collapsed &&this.screenWith < 768) {
     styleClass='body-trimmed';
  
  }
  else if(this.collapsed && this.screenWith <=768 && this.screenWith >0){
    styleClass='body-md-screen';

 }
return styleClass;

}


}