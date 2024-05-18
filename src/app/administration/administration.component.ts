import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Admin } from './admin.model';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent implements OnInit {
  admins: Admin[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAdmins().subscribe((data) => {
      this.admins = data;
    });
  }
}
