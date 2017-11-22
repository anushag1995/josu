import { navpills } from './../models/home';
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({

  emailFormControl : new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(30),
    Validators.pattern(EMAIL_REGEX)]),

  passwordFormControl :  new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20)
  ])
   })
 get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }
  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }
  constructor() {
    
   }

    onSubmit(loginForm) {
    let data = loginForm.value;
   
    // this.service.postRegisterData(data).subscribe(response => {
    //   console.log(response);
    //   let m = response.json();
    //   if (m.status == true) {
    //     this.result="registration successful";
    //     this.routes.navigate(['/login']);
    //   }


    // })
    console.log(data);
  }
  ngOnInit() {


  }

}
