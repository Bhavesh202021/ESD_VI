import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // num1: number = 0;
  // num2: number = 0;
form = new FormGroup({
  num1 : new FormControl(),
  num2 : new FormControl(),
})
 formResult :any;
  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    let x = parseInt(this.form.value.num1);
    let y = parseInt(this.form.value.num2);

    this.formResult = x + y ;
  }
}
