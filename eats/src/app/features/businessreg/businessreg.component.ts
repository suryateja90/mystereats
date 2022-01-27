import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Validation from 'src/app/utils/validation';
@Component({
  selector: 'app-businessreg',
  templateUrl: './businessreg.component.html',
  styleUrls: ['./businessreg.component.css']
})
export class BusinessregComponent implements OnInit {

  bForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // build the user edit form
  public buildForm(): void {
    this.bForm = this.formBuilder.group(
      {
        storeName: ['', Validators.required, Validators.minLength(6),
        Validators.maxLength(20)],
        landLine: [''],
        mobileNo: [''],
        address: [''],
        email: ['', [Validators.required, Validators.email]],
        privatePolicy: [false],
        terms: [false],
        notify: [false],
        communication: this.formBuilder.group({
          sms: [],
          email: [],
          both: []
        }),
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  public save(): void {
    console.log(this.bForm.value);
  }
}
