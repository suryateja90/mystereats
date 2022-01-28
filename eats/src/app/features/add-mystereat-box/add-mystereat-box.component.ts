import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-mystereat-box',
  templateUrl: './add-mystereat-box.component.html',
  styleUrls: ['./add-mystereat-box.component.css']
})
export class AddMystereatBoxComponent implements OnInit {


  form = [{
    boxName: '',
    autoWeekFill: false,
    autoMonthFill: false,
    week: [
       {
        name: 'Monday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      },
      {
        name: 'Tuesday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      },
      {
        name: 'Wednesday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      },
      {
        name: 'Thursday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      },
      {
        name: 'Friday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      },
      {
        name: 'Saturday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      },
      {
        name: 'Sunday',
        check: false,
        pickupTime: [{from: '', to: '', qty: ''}]
      }
    ]
  }];


  constructor() { }

  ngOnInit(): void {
  }


  addPickTime(val: any): void {
    val.push({from: '', to: '', qty: ''});
  }

  addBox() {
  }

}
