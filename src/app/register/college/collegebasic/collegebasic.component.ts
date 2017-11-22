import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-collegebasic',
  templateUrl: './collegebasic.component.html',
  styleUrls: ['./collegebasic.component.scss']
})
export class CollegebasicComponent implements OnInit {




   collegeForm = new FormGroup({

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
    return this.collegeForm.get('firstNameFormControl');
  }
  get lastNameFormControl() {
    return this.collegeForm.get('lastNameFormControl');
  }
  get userIdFormControl() {
    return this.collegeForm.get('userIdFormControl');
  }
 get emailFormControl() {
    return this.collegeForm.get('emailFormControl');
  }

    onSubmit(collegeForm) {
    let data = collegeForm.value;
   
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
