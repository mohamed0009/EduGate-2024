import { Component } from '@angular/core';

@Component({
  selector: 'app-info-eleve',
  templateUrl: './info-eleve.component.html',
  styleUrl: './info-eleve.component.css'
})
export class InfoEleveComponent {
  nom: string = "nassiri";
  prenom: string = "ahmed";
  age: number = 18;
}
