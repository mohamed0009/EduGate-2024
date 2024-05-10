import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InfoEleveComponent } from './info-eleve/info-eleve.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProfsComponent } from './profs/profs.component';
import { NotesComponent } from './notes/notes.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 1e409a95fc0595f82297c1e2f6c8c2cd4fac555f



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    InfoEleveComponent,
    SidenavComponent,
    DashboardComponent,
    StudentComponent,
    AdministrationComponent,
    ProfsComponent,
    NotesComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
=======
    BrowserAnimationsModule
>>>>>>> 1e409a95fc0595f82297c1e2f6c8c2cd4fac555f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
