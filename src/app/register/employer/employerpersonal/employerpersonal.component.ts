import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
@Component({
  selector: 'app-employerpersonal',
  templateUrl: './employerpersonal.component.html',
  styleUrls: ['./employerpersonal.component.scss']
})
export class EmployerpersonalComponent implements OnInit {


  addressForm = new FormGroup({

    contactNumberFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),

    faxFormControl: new FormControl('', [
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
    return this.addressForm.get('contactNumberFormControl');
  }
  get faxFormControl() {
    return this.addressForm.get('faxFormControl');
  }
  get addressFormControl() {
    return this.addressForm.get('addressFormControl');
  }
  get zipCodeFormControl() {
    return this.addressForm.get('zipCodeFormControl');
  }

  get cityFormControl() {
    return this.addressForm.get('cityFormControl');
  }
  get stateFormControl() {
    return this.addressForm.get('stateFormControl');
  }
  get countryFormControl() {
    return this.addressForm.get('countryFormControl');
  }



  onSubmit(addressForm) {
    let data = addressForm.value;

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
