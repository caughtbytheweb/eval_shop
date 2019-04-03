import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductEditionComponent } from './components/product-edition/product-edition.component';
import { LayoutProductComponent } from './layout/layout-product/layout-product.component';
import { ProductCreatePageComponent } from './pages/product-create-page/product-create-page.component';
import { ProductUpdatePageComponent } from './pages/product-update-page/product-update-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { RouterModule } from '@angular/router';
import { productRoutes } from './product.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductEditionComponent,
    LayoutProductComponent,
    ProductCreatePageComponent,
    ProductUpdatePageComponent,
    ProductListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    SharedModule
  ]
})
export class ProductModule { }
