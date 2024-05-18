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
    { id: 11, nom: 'Samira', prenom: 'Rahmouni', email: 'samira.rahmouni@example.ma', note: 17, class: 1 },
    { id: 12, nom: 'Khalid', prenom: 'Ouabach', email: 'khalid.ouabach@example.ma', note: 15, class: 1 },
    { id: 13, nom: 'Sara', prenom: 'Kabbaj', email: 'sara.kabbaj@example.ma', note: 19, class: 1 },
    { id: 14, nom: 'Youssef', prenom: 'Ait', email: 'youssef.ait@example.ma', note: 12, class: 1 },
    { id: 15, nom: 'Samira', prenom: 'Houssa', email: 'samira.houssa@example.ma', note: 17, class: 1 },
    { id: 16, nom: 'Ali', prenom: 'Zakaria', email: 'ali.zakaria@example.ma', note: 15, class: 1 },
    { id: 17, nom: 'Rachida', prenom: 'El', email: 'rachida.el@example.ma', note: 16, class: 1 },
    { id: 18, nom: 'Mounir', prenom: 'Tazi', email: 'mounir.tazi@example.ma', note: 13, class: 1 },
    { id: 19, nom: 'Nadia', prenom: 'Hachimi', email: 'nadia.hachimi@example.ma', note: 18, class: 1 },
    { id: 20, nom: 'Hassan', prenom: 'Rouba', email: 'hassan.rouba@example.ma', note: 15, class: 1 },
    { id: 21, nom: 'Sanaa', prenom: 'Najat', email: 'sanaa.najat3@example.ma', note: 17, class: 1 },
    { id: 22, nom: 'Mohamed', prenom: 'Ait', email: 'mohamed.ait@example.ma', note: 14, class: 2 },
    { id: 23, nom: 'Fatima', prenom: 'Zahra', email: 'fatima.zahra@example.ma', note: 16, class: 2 },
    { id: 24, nom: 'Said', prenom: 'Ahmed', email: 'said.ahmed@example.ma', note: 13, class: 2 },
    { id: 25, nom: 'Najat', prenom: 'Said', email: 'najat.said@example.ma', note: 18, class: 2 },
    { id: 26, nom: 'Samira', prenom: 'Rahmouni', email: 'samira.rahmouni@example.ma', note: 17, class: 2 },
    { id: 27, nom: 'Khalid', prenom: 'Ouabach', email: 'khalid.ouabach@example.ma', note: 15, class: 2 },
    { id: 28, nom: 'Sara', prenom: 'Kabbaj', email: 'sara.kabbaj@example.ma', note: 19, class: 2 },
    { id: 29, nom: 'Youssef', prenom: 'Ait', email: 'youssef.ait@example.ma', note: 12, class: 2 },
    { id: 30, nom: 'Samira', prenom: 'Houssa', email: 'samira.houssa@example.ma', note: 17, class: 2 },
    { id: 31, nom: 'Ali', prenom: 'Zakaria', email: 'ali.zakaria@example.ma', note: 15, class: 2 },
    { id: 32, nom: 'Rachida', prenom: 'El', email: 'rachida.el@example.ma', note: 16, class: 2 },
    { id: 33, nom: 'Mounir', prenom: 'Tazi', email: 'mounir.tazi@example.ma', note: 13, class: 2 },
    { id: 34, nom: 'Nadia', prenom: 'Hachimi', email: 'nadia.hachimi@example.ma', note: 18, class: 2 },
    { id: 35, nom: 'Hassan', prenom: 'Rouba', email: 'hassan.rouba@example.ma', note: 15, class: 2 },
    { id: 36, nom: 'Sanaa', prenom: 'Najat', email: 'sanaa.najat3@example.ma', note: 17, class: 2 },
    { id: 37, nom: 'Mohamed', prenom: 'Ait', email: 'mohamed.ait@example.ma', note: 14, class: 3 },
    { id: 38, nom: 'Fatima', prenom: 'Zahra', email: 'fatima.zahra@example.ma', note: 16, class: 3 },
    { id: 39, nom: 'Said', prenom: 'Ahmed', email: 'said.ahmed@example.ma', note: 13, class: 3 },
    { id: 40, nom: 'Najat', prenom: 'Said', email: 'najat.said@example.ma', note: 18, class: 3 },
    { id: 41, nom: 'Samira', prenom: 'Rahmouni', email: 'samira.rahmouni@example.ma', note: 17, class: 3 },
    { id: 42, nom: 'Khalid', prenom: 'Ouabach', email: 'khalid.ouabach@example.ma', note: 15, class: 3 },
    { id: 43, nom: 'Sara', prenom: 'Kabbaj', email: 'sara.kabbaj@example.ma', note: 19, class: 3 },
    { id: 44, nom: 'Youssef', prenom: 'Ait', email: 'youssef.ait@example.ma', note: 12, class: 3 },
    { id: 45, nom: 'Samira', prenom: 'Houssa', email: 'samira.houssa@example.ma', note: 17, class: 3 },
    { id: 46, nom: 'Ali', prenom: 'Zakaria', email: 'ali.zakaria@example.ma', note: 15, class: 3 },
    { id: 47, nom: 'Rachida', prenom: 'El', email: 'rachida.el@example.ma', note: 16, class: 3 },
    { id: 48, nom: 'Mounir', prenom: 'Tazi', email: 'mounir.tazi@example.ma', note: 13, class: 3 },
    { id: 49, nom: 'Nadia', prenom: 'Hachimi', email: 'nadia.hachimi@example.ma', note: 18, class: 3 },
    { id: 50, nom: 'Hassan', prenom: 'Rouba', email: 'hassan.rouba@example.ma', note: 15, class: 3 },
    { id: 51, nom: 'Sanaa', prenom: 'Najat', email: 'sanaa.najat3@example.ma', note: 17, class: 3 },
    ];

  selectedClass: number | string = '1'; // Default selected class
  sortOrder: string = '1'; // Default sort order
  newNote: Notes = { id: 0, nom: '', prenom: '', email: '', note: 0, class: 0 }; // Initialize newNote object
  isEditMode: boolean = false; // Track if the form is in edit mode

  get filteredNotes(): Notes[] {
    let filteredNotes = this.selectedClass === ''
      ? this.notes
      : this.notes.filter(note => note.class === parseInt(this.selectedClass as string));

    if (this.sortOrder === '1') {
      filteredNotes.sort((a, b) => b.note - a.note); // Sort by highest note
    } else if (this.sortOrder === '2') {
      filteredNotes.sort((a, b) => a.note - b.note); // Sort by lowest note
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
    this.resetForm();
  }

  editNoteMode(note: Notes) {
    this.newNote = { ...note };
    this.isEditMode = true;
  }

  deleteNote(note: Notes) {
    const index = this.notes.indexOf(note);
    if (index > -1) {
      this.notes.splice(index, 1);
    }
    this.resetForm();
  }

  cancelEdit() {
    this.resetForm();
  }

  resetForm() {
    this.newNote = { id: 0, nom: '', prenom: '', email: '', note: 0, class: 0 };
    this.isEditMode = false;
  }
}
