import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  number:number = 0;

  currentStyle = {
    color : this.number === 5 ? 'white' : 'blue',
  }

  constructor() { }

  ngOnInit(): void {
  }

  sumNumber() {
    this.number = this.number + 1;
    console.log(typeof(this.number))
  }

  resNumber() {
    this.number = this.number - 1;
  }

  handleNumber(event:any) {
    this.number = parseInt(event.target.value);
  }

}
