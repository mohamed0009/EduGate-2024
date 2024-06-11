import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

import { AppRoutingModule } from './app-routing.module';
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
import { HeaderComponent } from './header/header.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { ConsultStudentsComponent } from './consult-students/consult-students.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    ConsultStudentsComponent,
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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/auth/']
      }
    })
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
