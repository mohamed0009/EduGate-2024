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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './administration/data.service';
import { StudentService } from './student/StudentService';
import { StudentMarksComponent } from './student-marks/student-marks.component';

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
    BodyComponent,
    HeaderComponent,
    StudentMarksComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
