import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
@Component({
  selector: 'app-studentpersonal',
  templateUrl: './studentpersonal.component.html',
  styleUrls: ['./studentpersonal.component.scss']
})
export class StudentpersonalComponent implements OnInit {

 studentPersonalForm = new FormGroup({

    contactNumberFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),

    dobFormControl: new FormControl('', [
      Validators.required,

    ]),
    addressFormControl: new FormControl('', [
      Validators.required,

    ]),
    zipCodeFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(6)

    ]),

    cityFormControl: new FormControl('', [
      Validators.required

    ]),
    stateFormControl: new FormControl('', [
      Validators.required

    ]),
    countryFormControl: new FormControl('', [
      Validators.required

    ]),

  })
  get contactNumberFormControl() {
    return this.studentPersonalForm.get('contactNumberFormControl');
  }
  get dobFormControl() {
    return this.studentPersonalForm.get('dobFormControl');
  }
  get addressFormControl() {
    return this.studentPersonalForm.get('addressFormControl');
  }
  get zipCodeFormControl() {
    return this.studentPersonalForm.get('zipCodeFormControl');
  }

  get cityFormControl() {
    return this.studentPersonalForm.get('cityFormControl');
  }
  get stateFormControl() {
    return this.studentPersonalForm.get('stateFormControl');
  }
  get countryFormControl() {
    return this.studentPersonalForm.get('countryFormControl');
  }



  onSubmit(studentPersonalForm) {
    let data = studentPersonalForm.value;

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
