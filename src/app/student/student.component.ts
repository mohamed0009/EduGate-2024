import { Component } from '@angular/core';

interface Student {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  class: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students: Student[] = [
    {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      email: 'john.doe@example.com',
      password: 'password1',
      class: 1,
    },
    {
      id: 2,
      nom: 'Jane',
      prenom: 'Doe',
      email: 'jane.doe@example.com',
      password: 'password2',
      class: 2,
    },
    {
      id: 3,
      nom: 'Bob',
      prenom: 'Smith',
      email: 'bob.smith@example.com',
      password: 'password3',
      class: 3,
    },
    {
      id: 4,
      nom: 'Alice',
      prenom: 'Johnson',
      email: 'alice.johnson@example.com',
      password: 'password4',
      class: 1,
    },
    {
      id: 5,
      nom: 'Charlie',
      prenom: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password5',
      class: 2,
    },
    {
      id: 6,
      nom: 'David',
      prenom: 'Williams',
      email: 'david.williams@example.com',
      password: 'password6',
      class: 3,
    },
  ];

  selectedClass: number | string = '';

  get filteredStudents(): Student[] {
    if (this.selectedClass === '') {
      return this.students;
    }

    // Convert selectedClass to number for comparison
    const selectedClassNumber = parseInt(this.selectedClass as string);

    return this.students.filter(
      (student) => student.class === selectedClassNumber
    );
  }

  addStudent() {
    const newStudent: Student = {
      id: this.students.length + 1,
      nom: '',
      prenom: '',
      email: '',
      password: '',
      class: 0,
    };

    this.students.push(newStudent);
  }

  editStudent(student: Student) {}

  deleteStudent(student: Student) {
    const index = this.students.indexOf(student);

    if (index > -1) {
      this.students.splice(index, 1);
    }
  }
}
