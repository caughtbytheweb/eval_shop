import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct;

  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onUpdate: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('==> ProductCardComponent ready !');
  }

  delete() {
    this.onDelete.emit(this.product.id);
  }

  update() {
    this.onUpdate.emit(this.product.id);
  }



}
