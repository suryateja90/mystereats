import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-storeinfo',
  templateUrl: './storeinfo.component.html',
  styleUrls: ['./storeinfo.component.css']
})
export class StoreinfoComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    timeRangePreset: new FormControl(),
    dates: new FormGroup({
      dateTo: new FormControl(),
      dateFrom: new FormControl(),
    }),
    clients: new FormControl([]),
    contentTypes: new FormControl(),
    classifications: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
