import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employerprofessional',
  templateUrl: './employerprofessional.component.html',
  styleUrls: ['./employerprofessional.component.scss']
})
export class EmployerprofessionalComponent implements OnInit {



   professionalForm = new FormGroup({

    positionFormControl: new FormControl('', [
      Validators.required,

    ]),

    industryBelongsToFormControl: new FormControl('', [
      Validators.required

    ]),
    companyNameFormControl: new FormControl('', [
      Validators.required

    ]),
    companyWebsiteFormControl: new FormControl('', [
      Validators.required

    ]),

  })
  get positionFormControl() {
    return this.professionalForm.get('positionFormControl');
  }
  get industryBelongsToFormControl() {
    return this.professionalForm.get('industryBelongsToFormControl');
  }
  get companyNameFormControl() {
    return this.professionalForm.get('companyNameFormControl');
  }
  get companyWebsiteFormControl() {
    return this.professionalForm.get('companyWebsiteFormControl');
  }




  onSubmit(professionalForm) {
    let data = professionalForm.value;

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
