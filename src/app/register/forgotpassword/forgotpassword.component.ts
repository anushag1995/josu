import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {


   forgotPasswordForm = new FormGroup({

  emailFormControl : new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(30),
    Validators.pattern(EMAIL_REGEX)]),

   })

  get emailFormControl() {
    return this.forgotPasswordForm.get('emailFormControl');
  }
 

    onSubmit(forgotPasswordForm) {
    let data = forgotPasswordForm.value;
   
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
