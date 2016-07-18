import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-shopping-cart',
  templateUrl: './3-shopping-cart.component.html',
  styleUrls: ['./3-shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items: any[];

  constructor() {
    // todo sort by price
    this.items = [
      {name: 'Angular 2 Book', price: 10},
      {name: 'Fridge', price: 250},
      {name: 'Socks', price: 20},
      {name: 'AA Batteries', price: 5}
    ];
  }

  ngOnInit() {
  }
}
