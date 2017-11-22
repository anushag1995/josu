import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-studentbasic',
  templateUrl: './studentbasic.component.html',
  styleUrls: ['./studentbasic.component.scss']
})
export class StudentbasicComponent implements OnInit {



   studentForm = new FormGroup({

  firstNameFormControl : new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
  ]),

  lastNameFormControl :  new FormControl('', [
    Validators.required,
    Validators.minLength(8),
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
    return this.studentForm.get('firstNameFormControl');
  }
  get lastNameFormControl() {
    return this.studentForm.get('lastNameFormControl');
  }
  get userIdFormControl() {
    return this.studentForm.get('userIdFormControl');
  }
 get emailFormControl() {
    return this.studentForm.get('emailFormControl');
  }

    onSubmit(studentForm) {
    let data = studentForm.value;
   
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
