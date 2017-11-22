import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
@Component({
  selector: 'app-collegeprofessional',
  templateUrl: './collegeprofessional.component.html',
  styleUrls: ['./collegeprofessional.component.scss']
})
export class CollegeprofessionalComponent implements OnInit {

 collegeDetailsForm = new FormGroup({

    collegeNameFormControl: new FormControl('', [
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

    adminMobileNumberFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),

    landLaneNumberFormControl: new FormControl('', [
      Validators.required,

    ])

  })
 
  get collegeNameFormControl() {
    return this.collegeDetailsForm.get('collegeNameFormControl');
  }
  get addressFormControl() {
    return this.collegeDetailsForm.get('addressFormControl');
  }
  get zipCodeFormControl() {
    return this.collegeDetailsForm.get('zipCodeFormControl');
  }

  get cityFormControl() {
    return this.collegeDetailsForm.get('cityFormControl');
  }
  get stateFormControl() {
    return this.collegeDetailsForm.get('stateFormControl');
  }
  get countryFormControl() {
    return this.collegeDetailsForm.get('countryFormControl');
  }
   get adminMobileNumberFormControl() {
    return this.collegeDetailsForm.get('adminMobileNumberFormControl');
  }
   get landLaneNumberFormControl() {
    return this.collegeDetailsForm.get('landLaneNumberFormControl');
  }



  onSubmit(collegeDetailsForm) {
    let data = collegeDetailsForm.value;

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
