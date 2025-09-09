import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list-component/product-list-component';
import { ProductDetailComponent } from './features/products/product-detail-component/product-detail-component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent}
];
