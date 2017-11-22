import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-employerbasic',
  templateUrl: './employerbasic.component.html',
  styleUrls: ['./employerbasic.component.scss']
})
export class EmployerbasicComponent implements OnInit {


   employerForm = new FormGroup({

  firstNameFormControl : new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]),

  lastNameFormControl :  new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]),
  userIdFormControl : new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
  ]),
    emailFormControl : new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(30),
    Validators.pattern(EMAIL_REGEX)]),
   })
 get firstNameFormControl() {
    return this.employerForm.get('firstNameFormControl');
  }
  get lastNameFormControl() {
    return this.employerForm.get('lastNameFormControl');
  }
  get userIdFormControl() {
    return this.employerForm.get('userIdFormControl');
  }
 get emailFormControl() {
    return this.employerForm.get('emailFormControl');
  }

    onSubmit(employerForm) {
    let data = employerForm.value;

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

  constructor() { }

  ngOnInit() {
  }

}
