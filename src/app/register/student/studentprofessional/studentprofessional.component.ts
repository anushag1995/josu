import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
@Component({
  selector: 'app-studentprofessional',
  templateUrl: './studentprofessional.component.html',
  styleUrls: ['./studentprofessional.component.scss']
})
export class StudentprofessionalComponent implements OnInit {


   studentProfessionalForm = new FormGroup({
 
    collegeNameFormControl: new FormControl('', [
      Validators.required

    ]),
    addressFormControl: new FormControl('', [
      Validators.required,

    ]),

    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(30)

    ])
  
   

  })
  get collegeNameFormControl() {
    return this.studentProfessionalForm.get('collegeNameFormControl');
  }
  get addressFormControl() {
    return this.studentProfessionalForm.get('addressFormControl');
  }
  get emailFormControl() {
    return this.studentProfessionalForm.get('emailFormControl');
  }
  




  onSubmit(studentProfessionalForm) {
    let data = studentProfessionalForm.value;

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
