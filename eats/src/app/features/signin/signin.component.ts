import { Component, OnInit } from '@angular/core';
import { CrudoperationService } from 'src/app/services/crudoperation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: any;
  password: any;

  constructor(private crud: CrudoperationService) { }

  ngOnInit(): void {
  }

  sign() {
    this.crud.save('/loginUser', {email: this.email, password: this.password}).subscribe((res) => {

    }, err => {});
  }

}
