import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqr',
  templateUrl: './sqr.component.html',
  styleUrls: ['./sqr.component.css']
})
export class SqrComponent implements OnInit {
  num: number = 0;
  sqr: number = 0;
  colors = ["Red","Blue","White"];
  constructor() { }

  ngOnInit(): void {
  }

  getSqr(){
   this.sqr = this.num*this.num;
  }

}