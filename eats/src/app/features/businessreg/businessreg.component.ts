import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-businessreg',
  templateUrl: './businessreg.component.html',
  styleUrls: ['./businessreg.component.css']
})
export class BusinessregComponent implements OnInit {

  clientForm: FormGroup;

  constructor(public form: FormBuilder,) { }

  ngOnInit(): void {
    this.buildForm();
  }

  // build the user edit form
  public buildForm() {
    this.clientForm = this.form.group({
      lastName: ['', []],
      firstName: ['', []],
      ssnKey: ['', []],
      phone: ['', []],
      email: ['', []],
      ssn: ['', []],
    });
  }
}
