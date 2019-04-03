import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  products: IProduct[];

  constructor(
    private productSrv: ProductService,
    private route: Router
  ) { }

  ngOnInit() {
    console.log('----> OnInit ProductListPageComponent');
    this.loadData();
  }

  loadData(): any {
    console.log('----> Load data ', this.productSrv.products);
    this.products = this.productSrv.products;
  }

  onDeleteProduct(productId: number) {
    this.productSrv.deleteById(productId);
  }

  onUpdateProduct(productId: number) {
    this.route.navigate(['product/update', productId]);
  }

}
