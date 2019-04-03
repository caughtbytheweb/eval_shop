import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-update-page',
  templateUrl: './product-update-page.component.html',
  styleUrls: ['./product-update-page.component.css']
})
export class ProductUpdatePageComponent implements OnInit {

  productId: number;
  productToUpdate: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productSrv: ProductService
  ) { 
    this.productId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): any {
    this.productToUpdate = this.productSrv.getById(this.productId);
  }

  onUpdateProduct(product: IProduct) {
    console.log('----> onUpdateProduct ', product);
    this.productSrv.updateById(this.productId, product);
  }

}
