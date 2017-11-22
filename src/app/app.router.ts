import { ForgotpasswordComponent } from './register/forgotpassword/forgotpassword.component';

import { CollegeprofessionalComponent } from './register/college/collegeprofessional/collegeprofessional.component';
import { CollegebasicComponent } from './register/college/collegebasic/collegebasic.component';

import { StudentprofessionalComponent } from './register/student/studentprofessional/studentprofessional.component';
import { StudentbasicComponent } from './register/student/studentbasic/studentbasic.component';
import { StudentpersonalComponent } from './register/student/studentpersonal/studentpersonal.component';

import { EmployerprofessionalComponent } from './register/employer/employerprofessional/employerprofessional.component';
import { EmployerpersonalComponent } from './register/employer/employerpersonal/employerpersonal.component';
import { EmployerbasicComponent } from './register/employer/employerbasic/employerbasic.component';

import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from "./register/register.component";

import { DashboardheaderComponent } from './register/dashboardheader/dashboardheader.component';
import { EmployerdashboardComponent } from './register/employer/employerdashboard/employerdashboard.component';
import { StudentdashboardComponent } from './register/student/studentdashboard/studentdashboard.component';
import { CollegedashboardComponent } from './register/college/collegedashboard/collegedashboard.component';

import { EmployerslistComponent } from './register/student/studentdashboard/employerslist/employerslist.component';
import { JobslistComponent } from './register/student/studentdashboard/jobslist/jobslist.component';

import { StudentslistComponent } from './register/college/collegedashboard/studentslist/studentslist.component';
import { StudentjobslistComponent } from './register/college/collegedashboard/studentjobslist/studentjobslist.component';

import { ApplicationsComponent } from './register/employer/employerdashboard/applications/applications.component';
import { CollegelistComponent } from './register/employer/employerdashboard/collegelist/collegelist.component';
import { EmployerstudentlistComponent } from './register/employer/employerdashboard/employerstudentlist/employerstudentlist.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home", component: HeaderComponent, children: [
            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },
            { path: "register/employer", component: EmployerbasicComponent },
            { path: "register/employer/employerPersonal", component:EmployerpersonalComponent },
            { path: "register/employer/employerPersonal/employerProfessional", component: EmployerprofessionalComponent },
            { path: "register/student", component: StudentbasicComponent },
            { path: "register/student/studentPersonal", component: StudentpersonalComponent },
            { path: "register/student/studentPersonal/studentProfessional", component: StudentprofessionalComponent },
            { path: "register/college", component: CollegebasicComponent },
            { path: "register/college/collegeProfessional", component: CollegeprofessionalComponent },
            {path:"login/forgotpassword",component:ForgotpasswordComponent},
            
        ]
    },
     { path: "home/register/employer/employerPersonal/employerProfessional/dashboard",component:EmployerdashboardComponent,children:[
        { path: "applications", component: ApplicationsComponent },
        { path: "collegelist", component: CollegelistComponent },
        { path: "studentlist", component: EmployerstudentlistComponent }
    ]
    
    },
     { path: "home/register/student/studentPersonal/studentProfessional/dashboard",component:StudentdashboardComponent, children: [
        {path:"employerslist",component:EmployerslistComponent},
        {path:"jobslist",component:JobslistComponent}
]},
     {path:"register/college/collegeProfessional/dashboard",component:StudentdashboardComponent,children: [
        {path:"studentslist",component:StudentslistComponent},
        {path:"jobslist",component: StudentjobslistComponent}
     ]}
];
export const approute: ModuleWithProviders = RouterModule.forRoot(routes);