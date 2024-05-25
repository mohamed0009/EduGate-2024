import { Component } from '@angular/core';

interface Notes {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  note: number;
  class: number;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: Notes[] = [
    { id: 1, nom: 'Youssef', prenom: 'BAHADDOU', email: 'sehrawi.hedo@marrakech.com', note: 13, class: 1 },
    { id: 2, nom: 'Jad', prenom: 'Jarid', email: 'jadJarid@example.com', note: 19, class: 2 },
    { id: 3, nom: 'Bouchaib', prenom: 'Rachidi', email: 'BouchaibRachidi@example.com', note: 12, class: 3 },
    { id: 4, nom: 'Abdeltif', prenom: 'Hassan', email: 'AliHassan@example.com', note: 15, class: 1 },
    { id: 5, nom: 'Hamada', prenom: 'Ridawi', email: 'ridawiHamada@example.com', note: 13, class: 2 },
    { id: 6, nom: 'Hemida', prenom: 'kasawi', email: 'kasawihmida@example.com', note: 12, class: 3 },
    { id: 7, nom: 'Mohamed', prenom: 'Ait', email: 'mohamed.ait@example.ma', note: 14, class: 1 },
    { id: 8, nom: 'Fatima', prenom: 'Zahra', email: 'fatima.zahra@example.ma', note: 16, class: 1 },
    { id: 9, nom: 'Said', prenom: 'Ahmed', email: 'said.ahmed@example.ma', note: 13, class: 1 },
    { id: 10, nom: 'Najat', prenom: 'Said', email: 'najat.said@example.ma', note: 18, class: 1 },
    { id: 11, nom: 'Khalid', prenom: 'Benali', email: 'khalid.benali@example.ma', note: 14, class: 1 },
    { id: 12, nom: 'Hafsa', prenom: 'El Amrani', email: 'hafsa.elamrani@example.ma', note: 17, class: 2 },
    { id: 13, nom: 'Yassin', prenom: 'Idrissi', email: 'yassin.idrissi@example.ma', note: 15, class: 3 },
    { id: 14, nom: 'Ibtissam', prenom: 'Fassi', email: 'ibtissam.fassi@example.ma', note: 16, class: 1 },
    { id: 15, nom: 'Karim', prenom: 'El Fassi', email: 'karim.elfassi@example.ma', note: 18, class: 2 },
    { id: 16, nom: 'Amina', prenom: 'El Kandri', email: 'amina.elkandri@example.ma', note: 13, class: 3 },
    { id: 17, nom: 'Omar', prenom: 'Bouzidi', email: 'omar.bouzidi@example.ma', note: 19, class: 1 },
    { id: 18, nom: 'Loubna', prenom: 'Abdi', email: 'loubna.abdi@example.ma', note: 15, class: 2 },
    { id: 19, nom: 'Hicham', prenom: 'El Arfaoui', email: 'hicham.elarfaoui@example.ma', note: 12, class: 3 },
    { id: 20, nom: 'Rajaa', prenom: 'Lamrani', email: 'rajaa.lamrani@example.ma', note: 16, class: 1 },
    { id: 21, nom: 'Hassan', prenom: 'El Amrani', email: 'hassan.elamrani@example.ma', note: 14, class: 1 },
    { id: 22, nom: 'Nadia', prenom: 'Benbrahim', email: 'nadia.benbrahim@example.ma', note: 17, class: 2 },
    { id: 23, nom: 'Ahmed', prenom: 'El Moutawakil', email: 'ahmed.elmoutawakil@example.ma', note: 15, class: 3 },
    { id: 24, nom: 'Samira', prenom: 'El Khattabi', email: 'samira.elkhattabi@example.ma', note: 16, class: 1 },
    { id: 25, nom: 'Younes', prenom: 'El Jari', email: 'younes.eljari@example.ma', note: 18, class: 2 },
    { id: 26, nom: 'Imane', prenom: 'El Ouali', email: 'imane.elouali@example.ma', note: 13, class: 3 },
    { id: 27, nom: 'Ali', prenom: 'Essaadi', email: 'ali.essaadi@example.ma', note: 19, class: 1 },
    { id: 28, nom: 'Souad', prenom: 'El Khatabi', email: 'souad.elkhatabi@example.ma', note: 15, class: 2 },
    { id: 29, nom: 'Karima', prenom: 'Bouhaddi', email: 'karima.bouhaddi@example.ma', note: 12, class: 3 },
    { id: 30, nom: 'Mustapha', prenom: 'Berrada', email: 'mustapha.berrada@example.ma', note: 16, class: 1 },
  ];

  selectedClass: number | string = '1'; 
  sortOrder: string = 'id'; 
  sortDirection: string = 'asc'; 
  newNote: Notes = { id: 0, nom: '', prenom: '', email: '', note: 0, class: 0 }; 
  isEditMode: boolean = false; 

  get filteredNotes(): Notes[] {
    let filteredNotes = this.selectedClass === ''
      ? this.notes
      : this.notes.filter(note => note.class === parseInt(this.selectedClass as string));

    if (this.sortOrder === 'id') {
      filteredNotes.sort((a, b) => (this.sortDirection === 'asc' ? a.id - b.id : b.id - a.id)); 
    } else if (this.sortOrder === 'nom') {
      filteredNotes.sort((a, b) => (this.sortDirection === 'asc' ? a.nom.localeCompare(b.nom) : b.nom.localeCompare(a.nom)));
    } else if (this.sortOrder === 'note') {
      filteredNotes.sort((a, b) => (this.sortDirection === 'asc' ? a.note - b.note : b.note - a.note));
    }

    return filteredNotes;
  }

  addOrUpdateNote() {
    if (this.isEditMode) {
      const index = this.notes.findIndex(note => note.id === this.newNote.id);
      if (index !== -1) {
        this.notes[index] = { ...this.newNote };
      }
    } else {
      this.newNote.id = this.notes.length + 1;
      this.notes.push({ ...this.newNote });
    }
    this.isEditMode = false;
    this.resetNewNote();
  }

  editNoteMode(note: Notes) {
    this.newNote = { ...note };
    this.isEditMode = true;
  }

  deleteNote(note: Notes) {
    this.notes = this.notes.filter(n => n.id !== note.id);
  }

  cancelEdit() {
    this.isEditMode = false;
    this.resetNewNote();
  }

  resetNewNote() {
    this.newNote = { id: 0, nom: '', prenom: '', email: '', note: 0, class: 0 };
  }
}
