import { Component } from '@angular/core';

interface Prof {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  class: number;
}

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent {
  profs: Prof[] = [
    { id: 1, nom: 'John', prenom: 'Doe', email: 'john.doe@example.com', password: 'password1', class: 1 },
    { id: 2, nom: 'Jane', prenom: 'Doe', email: 'jane.doe@example.com', password: 'password2', class: 2 },
    { id: 3, nom: 'Bob', prenom: 'Smith', email: 'bob.smith@example.com', password: 'password3', class: 3 },
    { id: 4, nom: 'Alice', prenom: 'Johnson', email: 'alice.johnson@example.com', password: 'password4', class: 1 },
    { id: 5, nom: 'Charlie', prenom: 'Brown', email: 'charlie.brown@example.com', password: 'password5', class: 2 },
    { id: 6, nom: 'David', prenom: 'Williams', email: 'david.williams@example.com', password: 'password6', class: 3 }
  ];

  selectedClass: number | string = '';

  get filteredProfs(): Prof[] {
    if (this.selectedClass === '') {
      return this.profs;
    }

    // Convert selectedClass to number for comparison
    const selectedClassNumber = parseInt(this.selectedClass as string);

    return this.profs.filter(prof => prof.class === selectedClassNumber);
  }

  addProf() {
    const newProf: Prof = {
      id: this.profs.length + 1,
      nom: '',
      prenom: '',
      email: '',
      password: '',
      class: 0
    };

    this.profs.push(newProf);
  }

  editProf(prof: Prof) {
    // Implémentation de la fonction d'édition
  }

  deleteProf(prof: Prof) {
    const index = this.profs.indexOf(prof);

    if (index > -1) {
      this.profs.splice(index, 1);
    }
  }
}