import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InfoEleveComponent } from './info-eleve/info-eleve.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    InfoEleveComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
