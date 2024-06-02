import { Component } from '@angular/core';

interface Notes {
  subject: string;
  note: number;
  coefficient: number; // Add coefficient property
  studentEmail: string;
}

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css'],
})
export class StudentMarksComponent {
  studentEmail: string = 'sehrawi.hedo@marrakech.com'; // Set this to the logged-in student's email

  sortOrder: string = 'none'; // Default sort order is none

  notes: Notes[] = [
    { subject: 'Mathématique', note: 18, coefficient: 5, studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Physique et Chimie', note: 19, coefficient: 5, studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'S.V.T', note: 12, coefficient: 3,  studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Éducation Physique et Sportive', note: 16, coefficient: 1,studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Phylosophie', note: 14,  coefficient: 2, studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Langue Arabe', note: 2,  coefficient: 2, studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Langue Française', note: 11,  coefficient: 2, studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Langue Anglaise', note: 14, coefficient: 2,  studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Histoire-Géographie', note: 16,  coefficient: 3, studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Éducation Islamique', note: 4, coefficient: 2,  studentEmail: 'sehrawi.hedo@marrakech.com' },
    { subject: 'Informatique', note: 20,  coefficient: 2, studentEmail: 'sehrawi.hedo@marrakech.com' },
  ];

  get filteredNotes() {
    let filtered = this.notes.filter(note => note.studentEmail === this.studentEmail);
    if (this.sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.note - b.note);
    } else if (this.sortOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.note - a.note);
    }
    return filtered;
  }

  get averageNote() {
    const filtered = this.filteredNotes;
    const total = filtered.reduce((sum, note) => sum + (note.note * note.coefficient), 0); // Multiply note by coefficient
    const totalCoefficient = filtered.reduce((sum, note) => sum + note.coefficient, 0); // Calculate total coefficient
    return filtered.length > 0 ? (total / totalCoefficient).toFixed(2) : '0'; // Divide total by total coefficient
  }

  sortNotes() {
    // Logic for sorting notes
  }
}