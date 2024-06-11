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
  selector: 'app-teacher-marks',
  templateUrl: './teacher-marks.component.html',
  styleUrls: ['./teacher-marks.component.css'],
})
export class TeacherMarksComponent {
  notes: Notes[] = [
    { id: 1, nom: 'Youssef', prenom: 'BAHADDOU', email: 'sehrawi.hedo@marrakech.com', note: 13, class: 1 },
    { id: 2, nom: 'Jad', prenom: 'Jarid', email: 'jadJarid@example.com', note: 19, class: 2 },
    { id: 3, nom: 'Bouchaib', prenom: 'Rachidi', email: 'BouchaibRachidi@example.com', note: 12, class: 3 },
    // Add more sample data as needed
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
