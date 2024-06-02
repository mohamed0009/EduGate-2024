import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { ProfsComponent } from './profs/profs.component';
import { NotesComponent } from './notes/notes.component';
import { InfoEleveComponent } from './info-eleve/info-eleve.component';
import { AdministrationComponent } from './administration/administration.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
  { path: 'student-marks', component: StudentMarksComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentComponent },
  { path: 'profs', component: ProfsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'info-eleve', component: InfoEleveComponent },
  { path: 'admin', component: AdministrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
