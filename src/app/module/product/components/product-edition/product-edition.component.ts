import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interface/product.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-edition',
  templateUrl: './product-edition.component.html',
  styleUrls: ['./product-edition.component.css']
})
export class ProductEditionComponent implements OnInit {

  @Input() product: IProduct;

  @Output() onSaveProduct: EventEmitter<IProduct> = new EventEmitter();
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): any {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    })

    if (this.product) {
      this.patchForm();
    }
  }

  patchForm() {
    this.productForm.patchValue(this.product);
  }

  saveProduct() {
    let { value } = this.productForm;
    this.onSaveProduct.emit(value);
  }

}
