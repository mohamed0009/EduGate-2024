import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { ProfsComponent } from './profs/profs.component';
import { NotesComponent } from './notes/notes.component';
import { InfoEleveComponent } from './info-eleve/info-eleve.component';
import { AdministrationComponent } from './administration/administration.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'student-marks', component: StudentMarksComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'profs', component: ProfsComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },
  { path: 'info-eleve', component: InfoEleveComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
