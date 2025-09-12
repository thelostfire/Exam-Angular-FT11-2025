import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list-component/product-list-component';
import { ProductDetailComponent } from './features/products/product-detail-component/product-detail-component';
import { RegisterComponent } from './features/auth/register-component/register-component';
import { LoginComponent } from './features/auth/login-component/login-component';
import { PageNotFoundComponent } from './features/errors/page-not-found-component/page-not-found-component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: PageNotFoundComponent}
];
