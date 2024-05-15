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
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: Notes[] = [
    { id: 1, nom: 'Youssef', prenom: 'BAHADDOU', email: 'sehrawi.hedo@marrakech.com', note: 13, class: 1 },
    { id: 2, nom: 'Jad', prenom: 'Jarid', email: 'jadJarid@example.com', note: 19, class: 2 },
    { id: 3, nom: 'Bouchaib', prenom: 'Rachidi', email: 'BouchaibRachidi@example.com', note: 12, class: 3 },
    { id: 4, nom: 'Abdeltif', prenom: 'Hassan', email: 'AliHassan@example.com', note: 15, class: 1 },
    { id: 5, nom: 'Hamada', prenom: 'Ridawi', email: 'ridawiHamada@example.com', note: 13, class: 2 },
    { id: 6, nom: 'Hemida', prenom: 'kasawi', email: 'kasawihmida@example.com', note: 12, class: 3 }
  ];

  selectedClass: number | string = '1';
  sortOrder: string = '1'; // Default sort order

  get filteredNotes(): Notes[] {
    let filteredNotes = this.selectedClass === '' ? this.notes : this.notes.filter(note => note.class === parseInt(this.selectedClass as string));

    if (this.sortOrder === '1') {
      filteredNotes.sort((a, b) => b.note - a.note); // Sort by highest note
    } else if (this.sortOrder === '2') {
      filteredNotes.sort((a, b) => a.note - b.note); // Sort by lowest note
    }

    return filteredNotes;
  }

  addNote() {
    const newNote: Notes = {
      id: this.notes.length + 1,
      nom: '',
      prenom: '',
      email: '',
      note: 0,
      class: 0
    };

    this.notes.push(newNote);
  }

  editNotes(note: Notes) {
    // Your edit logic here
  }

  deleteNotes(note: Notes) {
    const index = this.notes.indexOf(note);

    if (index > -1) {
      this.notes.splice(index, 1);
    }
  }
}
