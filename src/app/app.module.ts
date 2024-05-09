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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
