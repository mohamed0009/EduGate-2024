import { Component, OnInit } from '@angular/core';
import { StudentService } from './StudentService';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = {
    idEleve: 0,
    classe: {
      idClasse: 0,
      nomClasse: '',
      niveau: ''
    }};
  isModalVisible: boolean = false;
  isEditVisible: boolean = false;
  selectedStudentIndex: number = -1;


  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (students) => {
        this.students = students;
        console.log(this.students);
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
  addStudent(): void {
    console.log('Adding student:', this.newStudent);
    this.studentService.addStudent(this.newStudent).subscribe(
      (student) => {
        this.students.push(student);
        this.newStudent = { idEleve: 0, classe: { idClasse: 0, nomClasse: '', niveau: '' } };
        this.isModalVisible = false;
      },
      (error) => console.error(error)
    );
  }
  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
    this.isEditVisible = false;
    this.selectedStudentIndex = -1;
    this.newStudent = { idEleve: 0, classe: { idClasse: 0, nomClasse: '', niveau: '' } };
  }
  editStudent(index: number): void {
    this.selectedStudentIndex = index;
    this.newStudent = { ...this.students[index] };
    this.isEditVisible = true;
  }
  updateStudent(): void {
    console.log('Updating student:', this.newStudent);
    this.studentService.updateStudent(this.newStudent.idEleve, this.newStudent).subscribe(
      () => {
        this.students[this.selectedStudentIndex] = { ...this.newStudent };
        this.hideModal();
      },
      (error) => console.error(error)
    );
  }
  deleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe(
      () => this.students = this.students.filter(student => student.idEleve !== studentId),
      (error) => console.error(error)
    );
  }
}
