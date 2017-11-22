import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";



import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatSidenavModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import {MatSortModule,MatPaginatorModule,MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material';


import { approute } from './app.router';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { EmployerbasicComponent } from './register/employer/employerbasic/employerbasic.component';
import { EmployerpersonalComponent } from './register/employer/employerpersonal/employerpersonal.component';
import { EmployerprofessionalComponent } from './register/employer/employerprofessional/employerprofessional.component';


import { StudentbasicComponent } from './register/student/studentbasic/studentbasic.component';
import { StudentpersonalComponent } from './register/student/studentpersonal/studentpersonal.component';
import { StudentprofessionalComponent } from './register/student/studentprofessional/studentprofessional.component';


import { CollegebasicComponent } from './register/college/collegebasic/collegebasic.component';
import { CollegeprofessionalComponent } from './register/college/collegeprofessional/collegeprofessional.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ForgotpasswordComponent } from './register/forgotpassword/forgotpassword.component';


import { DashboardheaderComponent } from './register/dashboardheader/dashboardheader.component';
import { EmployerdashboardComponent } from './register/employer/employerdashboard/employerdashboard.component';
import { StudentdashboardComponent } from './register/student/studentdashboard/studentdashboard.component';
import { CollegedashboardComponent } from './register/college/collegedashboard/collegedashboard.component';
import { EmployerslistComponent } from './register/student/studentdashboard/employerslist/employerslist.component';
import { JobslistComponent } from './register/student/studentdashboard/jobslist/jobslist.component';
import { StudentslistComponent } from './register/college/collegedashboard/studentslist/studentslist.component';
import { StudentjobslistComponent } from './register/college/collegedashboard/studentjobslist/studentjobslist.component';
import { AddjobComponent } from './register/employer/employerdashboard/addjob/addjob.component';
import { ApplicationsComponent } from './register/employer/employerdashboard/applications/applications.component';
import { CollegelistComponent } from './register/employer/employerdashboard/collegelist/collegelist.component';
import { EmployerstudentlistComponent } from './register/employer/employerdashboard/employerstudentlist/employerstudentlist.component';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    HomeComponent,
    FooterComponent,

    LoginComponent,

    RegisterComponent,


    EmployerbasicComponent,
    EmployerpersonalComponent,
    EmployerprofessionalComponent,

    StudentbasicComponent,
    StudentpersonalComponent,
    StudentprofessionalComponent,

    CollegebasicComponent,
    CollegeprofessionalComponent,
    SidenavComponent,
    ForgotpasswordComponent,
    DashboardheaderComponent,
    EmployerdashboardComponent,
    StudentdashboardComponent,
    CollegedashboardComponent,
    EmployerslistComponent,
    JobslistComponent,
    StudentslistComponent,
    StudentjobslistComponent,
    AddjobComponent,
    ApplicationsComponent,
    CollegelistComponent,
    EmployerstudentlistComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, BrowserAnimationsModule, FlexLayoutModule, approute
    , MatToolbarModule,FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule,MatSortModule,MatPaginatorModule,MatCheckboxModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
