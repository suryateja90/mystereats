import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-consumerreg',
  templateUrl: './consumerreg.component.html',
  styleUrls: ['./consumerreg.component.css']
})
export class ConsumerregComponent implements OnInit {

  cForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm(): void {
    this.cForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required, Validators.minLength(6),
        Validators.maxLength(20)],
        lastName: [''],
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
    console.log(this.cForm.value);
  }

}
