import { Routes } from '@angular/router';
import { LayoutProductComponent } from './layout/layout-product/layout-product.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductCreatePageComponent } from './pages/product-create-page/product-create-page.component';
import { ProductUpdatePageComponent } from './pages/product-update-page/product-update-page.component';

export const productRoutes: Routes = [
    {
        path: '',
        component: LayoutProductComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ProductListPageComponent },
            { path: 'create', component: ProductCreatePageComponent },
            { path: 'update/:id', component: ProductUpdatePageComponent },
        ]
    }
];