import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [
    {
      name: 'pdt1',
      description: 'lorem ipsum sit dolor amet',
      price: 10,
      id: 1 
    },
    {
      name: 'pdt2',
      description: 'lorem ipsum sit dolor amet2',
      price: 15,
      id: 2 
    },
  ];

  constructor() { }

  deleteById(productId) {
    const indexProduct = this.products.findIndex(({ id }) => id == productId);
    if ( indexProduct !== -1 ) {
      this.products.splice(indexProduct, 1);
    }

    if ( indexProduct == -1 ) {
      console.error('==> Product to delete not found');
    }
  }

  getById(productId: number) {
    const indexProduct = this.products.findIndex(({ id }) => id == productId);
    if ( indexProduct !== -1 ) {
      return this.products[indexProduct];
    }

    if ( indexProduct == -1 ) {
      console.error('==> Product not found');
    }
  }

  updateById(productId, newProduct: IProduct) {
    const indexProduct = this.products.findIndex(({ id }) => id == productId);
    if ( indexProduct !== -1 ) {
      this.products[indexProduct] = {
        ...this.products[indexProduct],
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price
      };

    }

    if ( indexProduct == -1 ) {
      console.error('==> Product to update not found');
    }
  }

}
