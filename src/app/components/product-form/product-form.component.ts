import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product = {
    name : '',
    prize : 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(productoForm: NgForm): void {
    console.log(productoForm);
  }

}
