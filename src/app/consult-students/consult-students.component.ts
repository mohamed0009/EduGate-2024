import { Component, OnInit } from '@angular/core';
import { StudentService } from './StudentService';
import { Student } from './student.model';

@Component({
  selector: 'app-consult-students',
  templateUrl: './consult-students.component.html',
  styleUrl: './consult-students.component.css'
})
export class ConsultStudentsComponent implements OnInit{
  students: Student[] = [];

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
}
