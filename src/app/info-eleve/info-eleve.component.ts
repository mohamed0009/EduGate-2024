import { Component } from '@angular/core';

@Component({
  selector: 'app-info-eleve',
  templateUrl: './info-eleve.component.html',
  styleUrl: './info-eleve.component.css'
})
export class InfoEleveComponent {
  showAbsences: boolean = false;
  toggleAbsences(): void {
    this.showAbsences = !this.showAbsences;
  }
  nom: string = "nassiri";
  prenom: string = "ahmed";
  classe: string = "info3";
  email:string = "nassiriAhmed@gmail.com";
}
