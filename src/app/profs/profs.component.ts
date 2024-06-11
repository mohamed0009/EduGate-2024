import { Component } from '@angular/core';

interface Prof {
  id: number;
  nom: string;
  prenom: string;
  date_de_naissance: string;
  lieu_de_naissance: string;
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
    { id: 1, nom: 'John', prenom: 'Doe', date_de_naissance: '01/01/2000', lieu_de_naissance: 'New York', email: 'john.doe@example.com', password: 'password', class: 1 },
    { id: 2, nom: 'Jane', prenom: 'Smith', date_de_naissance: '02/02/2001', lieu_de_naissance: 'Los Angeles', email: 'jane.smith@example.com', password: 'password', class: 2 },
    { id: 3, nom: 'Alice', prenom: 'Johnson', date_de_naissance: '03/03/2002', lieu_de_naissance: 'Chicago', email: 'alice.johnson@example.com', password: 'password', class: 3 },
    { id: 1, nom: 'John', prenom: 'Doe', date_de_naissance: '01/01/2000', lieu_de_naissance: 'New York', email: 'john.doe@example.com', password: 'password', class: 1 },
    { id: 2, nom: 'Jane', prenom: 'Smith', date_de_naissance: '02/02/2001', lieu_de_naissance: 'Los Angeles', email: 'jane.smith@example.com', password: 'password', class: 2 },
    { id: 3, nom: 'Alice', prenom: 'Johnson', date_de_naissance: '03/03/2002', lieu_de_naissance: 'Chicago', email: 'alice.johnson@example.com', password: 'password', class: 3 },
    { id: 1, nom: 'John', prenom: 'Doe', date_de_naissance: '01/01/2000', lieu_de_naissance: 'New York', email: 'john.doe@example.com', password: 'password', class: 1 }
  ];

  selectedClass: string = '';
  isProfModalOpen: boolean = false;
  isProfEditMode: boolean = false;
  currentProf: Prof = { id: 0, nom: '', prenom: '', date_de_naissance: '', lieu_de_naissance: '', email: '', password: '', class: 1 };

  get filteredProfs(): Prof[] {
    return this.selectedClass ? this.profs.filter(prof => prof.class.toString() === this.selectedClass) : this.profs;
  }

  openProfModal(prof: Prof | null): void {
    this.isProfModalOpen = true;
    if (prof) {
      this.isProfEditMode = true;
      this.currentProf = { ...prof };
    } else {
      this.isProfEditMode = false;
      this.currentProf = { id: 0, nom: '', prenom: '', date_de_naissance: '', lieu_de_naissance: '', email: '', password: '', class: 1 };
    }
  }

  closeProfModal(): void {
    this.isProfModalOpen = false;
  }

  addOrUpdateProf(): void {
    if (this.isProfEditMode) {
      const index = this.profs.findIndex(prof => prof.id === this.currentProf.id);
      if (index !== -1) {
        this.profs[index] = { ...this.currentProf };
      }
    } else {
      const newId = this.profs.length > 0 ? this.profs[this.profs.length - 1].id + 1 : 1;
      this.currentProf.id = newId;
      this.profs.push({ ...this.currentProf });
    }
    this.closeProfModal();
  }

  deleteProf(prof: Prof): void {
    const index = this.profs.findIndex(p => p.id === prof.id);
    if (index !== -1) {
      this.profs.splice(index, 1);
    }
  }
}
